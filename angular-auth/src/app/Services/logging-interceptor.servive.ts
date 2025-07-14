import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class LoggingInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler){
         ('Logging Interceptor called!');
         ('Request sent to URL: ' + req.url);
        return next.handle(req);
    }
}