import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Subject, tap } from "rxjs";
import { User } from "../../Model/User";
import { AuthResponseInterface } from "../../Interface/auth.Interface";

@Injectable(
    {providedIn: 'root'}
)
export class AuthServices{
    http: HttpClient = inject(HttpClient)

    private signInUrl:string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
    AIzaSyDxV-R4fV5p2v9eema8zijuU-PTut_4TEs`

    private loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxV-R4fV5p2v9eema8zijuU-PTut_4TEs`

    userSubject = new Subject <User>()

    signUp(email: string,password: string){
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

        console.log(res.expiresIn,  expiresInTs, expiresIn)

        const user = new User(res.email, res.localId, res.idToken, expiresIn )

        console.log(user, 'user')
            
        this.userSubject.next(user)
    }
}