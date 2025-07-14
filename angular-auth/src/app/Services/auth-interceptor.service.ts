import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType, HttpParams } from '@angular/common/http';
import { exhaustMap, take, tap } from 'rxjs/operators';
import { AuthServices } from './Auth-Services/auth.services';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    authService: AuthServices = inject(AuthServices);

    
    intercept(req: HttpRequest<any>, next: HttpHandler){
         ('Interceptor initialized!');

        return this.authService.userSubject.pipe(take(1), exhaustMap(user => {
    
            if(!user){
                return next.handle(req);
            }
            const modifiedReq = req.clone({
                params: new HttpParams().set('auth', user.token
            )})

            return next.handle(modifiedReq)
        }));
    }
}