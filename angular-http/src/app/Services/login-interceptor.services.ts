import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";

import { tap } from "rxjs";


export class LoginInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler){
        let modifiedReq = req.clone({headers: req.headers.append('content-type', 'application/json')})

        return next.handle(modifiedReq).pipe(tap(
            (event) => {
                if(event.type == HttpEventType.Response){
                     ('Login Interceptor fired')
                }
            }
        ))
    }
}