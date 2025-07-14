import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpEventType } from '@angular/common/http';
import { Task } from "../Model/Task";
import { map, catchError, tap, take, exhaustMap } from 'rxjs/operators';
import { Subject, throwError, Observable } from 'rxjs';
import { LoggingService } from "./Logging.Service";
import { AuthServices } from "./Auth-Services/auth.services";

@Injectable({
    providedIn: 'root'
})
export class TaskService{
    http: HttpClient = inject(HttpClient);
    loggingService: LoggingService = inject(LoggingService);
    errorSubject = new Subject<HttpErrorResponse>();
    userSubject = inject(AuthServices)

    CreateTask(task: Task): Observable<{name: string}>{
        return this.userSubject.userSubject.pipe(
            take(1),
            exhaustMap(user => {
                const headers = new HttpHeaders({'my-header': 'hello-world'});
                let queryParams = new HttpParams().set('auth', user.token);
                
                return this.http.post<{name: string}>(
                    'https://angular-http-tutorial-2377a-default-rtdb.firebaseio.com/tasks.json', 
                    task, 
                    {headers: headers, params: queryParams}
                );
            }),
            catchError((err) => {
                const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()};
                this.loggingService.logError(errorObj);
                return throwError(() => err);
            })
        );
    }

    DeleteTask(id: string | undefined): Observable<any>{
        return this.userSubject.userSubject.pipe(
            take(1),
            exhaustMap(user => {
                let queryParams = new HttpParams().set('auth', user.token);
                
                return this.http.delete(
                    'https://angular-http-tutorial-2377a-default-rtdb.firebaseio.com/tasks/' + id + '.json',
                    {params: queryParams}
                );
            }),
            catchError((err) => {
                const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()};
                this.loggingService.logError(errorObj);
                this.errorSubject.next(err);
                return throwError(() => err);
            })
        );
    }

    DeleteAllTasks(): Observable<any>{
        return this.userSubject.userSubject.pipe(
            take(1),
            exhaustMap(user => {
                let queryParams = new HttpParams().set('auth', user.token);
                
                return this.http.delete(
                    'https://angular-http-tutorial-2377a-default-rtdb.firebaseio.com/tasks.json', 
                    {observe: 'events', responseType: 'json', params: queryParams}
                );
            }),
            tap((event) => {
                 (event);
                if(event.type === HttpEventType.Sent){
                    // Handle sent event if needed
                }
            }),
            catchError((err) => {
                const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()};
                this.loggingService.logError(errorObj);
                this.errorSubject.next(err);
                return throwError(() => err);
            })
        );
    }

    GetAlltasks(): Observable<Task[]>{
         ('get all tasks called');

        return this.userSubject.userSubject.pipe(
            take(1),
            exhaustMap(user => {
                let queryParams = new HttpParams().set('auth', user.token);

                return this.http.get<{[key: string]: Task}>(
                    'https://angular-http-tutorial-2377a-default-rtdb.firebaseio.com/tasks.json', 
                    {params: queryParams}
                );
            }), 
            map((response) => {

                let tasks: Task[] = [];
            
                
                if(response) {
                    for(let key in response){
                        if(response.hasOwnProperty(key)){
                            tasks.push({...response[key], id: key});
                        }              
                    }
                }
                
                return tasks;
            }),
            catchError((err) => {
                console.error('Error fetching tasks:', err);
                return throwError(() => err);
            })
        );
    }

    UpdateTask(id: string | undefined, data: Task): Observable<any>{
        return this.userSubject.userSubject.pipe(
            take(1),
            exhaustMap(user => {
                let queryParams = new HttpParams().set('auth', user.token);
                
                return this.http.put(
                    'https://angular-http-tutorial-2377a-default-rtdb.firebaseio.com/tasks/' + id + '.json', 
                    data,
                    {params: queryParams}
                );
            }),
            catchError((err) => {
                const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()};
                this.loggingService.logError(errorObj);
                this.errorSubject.next(err);
                return throwError(() => err);
            })
        );
    }

    getTaskDetails(id: string | undefined): Observable<Task>{
        return this.userSubject.userSubject.pipe(
            take(1),
            exhaustMap(user => {
                let queryParams = new HttpParams().set('auth', user.token);
                
                return this.http.get<Task>(
                    'https://angular-http-tutorial-2377a-default-rtdb.firebaseio.com/tasks/' + id + '.json',
                    {params: queryParams}
                );
            }),
            map((response) => {
                 (response);
                let task = {...response, id: id};
                return task;
            }),
            catchError((err) => {
                const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()};
                this.loggingService.logError(errorObj);
                return throwError(() => err);
            })
        );
    }
}