import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";


export class AuthInterceptor implements HttpInterceptor{
    intercept(req:HttpRequest<any>, next: HttpHandler){
        const modifiedResponse = req.clone({headers: req.headers.append('auth', 'abcde') })

        return next.handle(modifiedResponse).pipe(tap((event) => {
            if(event.type == HttpEventType.Response){
                 ('Response successfully intercepted')
            }
        }))
    }
}