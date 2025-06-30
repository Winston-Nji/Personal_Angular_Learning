import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateFn, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { inject, Injectable } from "@angular/core";

import { AuthService } from "./auth.service";
import { ContactComponent } from '../contact/contact.component';

@Injectable({
    providedIn : 'root'
})
export class AuthGuard implements  CanActivateChild {

    authService = inject(AuthService)

    // canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{

    //     if(this.authService.isAuthenticated()){
    //         console.log(this.authService.isAuthenticated())
    //         return true
    //     }else{
    //         return false
    //     }
    // }

    canActivateChild(){
        if(this.authService.isAuthenticated()){
            console.log(this.authService.isAuthenticated())
            return true
        }else{
            return false
        }
    }

    canDeactivate(component : ContactComponent){
        return component.canExit()
    }

}

