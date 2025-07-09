import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable(
    {providedIn: 'root'}
)
export class AuthServices{
    http: HttpClient = inject(HttpClient)

    private signInUrl:string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
    AIzaSyDxV-R4fV5p2v9eema8zijuU-PTut_4TEs`

    private loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxV-R4fV5p2v9eema8zijuU-PTut_4TEs`

    signUp(email: string,password: string){
        const data = {email: email, password: password, returnSecureToken: true}

        return this.http.post(this.signInUrl, data)
    }

    login(email: string,password: string){
        const data = {email: email, password: password, returnSecureToken: true}

        return this.http.post(this.loginUrl, data)
    }
}