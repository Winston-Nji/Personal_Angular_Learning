import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Subject } from 'rxjs';

@Injectable(
    {providedIn: 'root'}
)

export class HTTPRequest{

    url :string = 'https://angular-http-tutorial-2377a-default-rtdb.firebaseio.com/tasks.json'

    http: HttpClient =  inject(HttpClient)

    errorSubject = new Subject<HttpErrorResponse>()

    CreateTask(data:any){
        return this.http.post(this.url, data)
    }

    deleteTask(id:string){
        this.http.delete('https://angular-http-tutorial-2377a-default-rtdb.firebaseio.com/tasks/' + id + '.json').subscribe(
            { 
                next: (response ) => {
                console.log(response)
                },

                error: (err) => {
                    this.errorSubject.next(err)
                }

            }
        )
    }

    deleteAllTasks(){
        this.http.delete(this.url).subscribe(
            { 
                error: (err) => {
                    this.errorSubject.next(err)
                }

            }
        )
    }

    getAllTasks(){
        // const headers = new HttpHeaders({'content-type' : 'application/json'})
        const headers = new HttpHeaders()
        headers.set('content-type', 'application/json')

        let queryParams = new HttpParams()
        queryParams = queryParams.set('page', 2)
        queryParams = queryParams.set('item', 10)

        return this.http.get<{[key:string]: any}> (this.url, {headers: headers, params: queryParams})
            .pipe(map((response: any) => {
            let tasks = []
    
            for(let key in response){
                tasks.push({...response[key], id:key})
            }
    
            return tasks
            }
        ))
    }

    getSingleTask(id:string){
        return this.http.get('https://angular-http-tutorial-2377a-default-rtdb.firebaseio.com/tasks/' + id + '.json')
    }

    updateTask(id:string, data:any){
        return this.http.put('https://angular-http-tutorial-2377a-default-rtdb.firebaseio.com/tasks/' + id + '.json', data)
    }

}