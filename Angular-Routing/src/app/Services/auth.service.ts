import { inject, Injectable } from "@angular/core"
import { UserService } from "./user.service";
import { User } from "../Models/user";

Injectable()

export class AuthService{
    isLogged: Boolean = false;
    userService: UserService = inject(UserService)

    login(username:string, password:string){
        let user = this.userService.users.find(
            user => user.name === username && user.password === password
        )

        if(user === undefined){
            this.isLogged = false
        }else{
            this.isLogged = true
            // return user;
        }
    }

    logout(){
        this.isLogged = false
    }

    isAuthenticated(){
        return this.isLogged
    }
}