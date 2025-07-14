import { inject } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthServices } from './Services/Auth-Services/auth.services';
import { map, Observable, take } from 'rxjs';

export const canActivate = () : Observable<boolean | UrlTree> => {
    const authService = inject(AuthServices)
    const router = inject(Router)

    return authService.userSubject.pipe(
        take(1),
        map(user => {
            if(user){
                return true
            }else{
               return router.createUrlTree(['/login'])
            }
        })
    )
}