import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, Subject, tap } from "rxjs";
import { User } from "../../Model/User";
import { AuthResponseInterface } from "../../Interface/auth.Interface";
import { Router } from "@angular/router";

@Injectable(
    {providedIn: 'root'}
)
export class AuthServices{
    http: HttpClient = inject(HttpClient)

    private signInUrl:string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
    AIzaSyDxV-R4fV5p2v9eema8zijuU-PTut_4TEs`

    private loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxV-R4fV5p2v9eema8zijuU-PTut_4TEs`

    router = inject(Router)

    userSubject = new BehaviorSubject <User | null>(null)

    signUp(email: string, password: string){
        const data = {email: email, password: password, returnSecureToken: true}

        return this.http.post<AuthResponseInterface>(this.signInUrl, data).pipe(tap((res) => {
            this.handleCreateUser(res)
        }))
    }

    login(email: string,password: string){
        const data = {email: email, password: password, returnSecureToken: true}

        return this.http.post(this.loginUrl, data).pipe(tap((res) => {
            this.handleCreateUser(res)
        }))
    }

    private handleCreateUser(res){
        const expiresInTs = new Date().getTime() + Number(res.expiresIn) * 1000

        const expiresIn = new Date(expiresInTs)

        const user = new User(res.email, res.localId, res.idToken, expiresIn )

        localStorage.setItem('user', JSON.stringify(user))

            
        this.userSubject.next(user)
    }

    logout(){
        this.userSubject.next(null)
        this.router.navigate(['/login'])
    }

    autoLogin(){
        const userData  = localStorage.getItem('user')
        
        const parsedUser = JSON.parse(userData)

        if(!parsedUser){
            alert("No user found, Login")
            this.router.navigate(['/login'])
        }

        const loggedUser = new User(parsedUser.email, parsedUser.id, parsedUser._token, parsedUser._expiresIn)

        if(loggedUser.token){
            this.userSubject.next(loggedUser)

            const timerValue = parsedUser._expiresIn.getTime() - new Date().getTime()

            this.autoLogOut(timerValue)
        }
    }

    autoLogOut(expireTime: number){
        setTimeout(() => {
            this.userSubject.next(null)
        }, expireTime)
        
    }
}