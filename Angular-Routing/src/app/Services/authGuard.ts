import { inject } from "@angular/core"
import { AuthService } from "./auth.service"

export const AuthGuardFunction = () =>{

    const authService = inject(AuthService)

    if(authService.isAuthenticated()){
            console.log(  authService.isAuthenticated())
            return true
        }else{
            return false
        }
}