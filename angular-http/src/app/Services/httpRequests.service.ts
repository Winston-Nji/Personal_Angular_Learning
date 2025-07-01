import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

@Injectable(
    {providedIn: 'root'}
)

export class HTTPRequest{

    url :string = 'https://angular-http-tutorial-2377a-default-rtdb.firebaseio.com/tasks.json'

    http: HttpClient =  inject(HttpClient)

    CreateTask(data:any){
        return this.http.post(this.url, data)
    }

    deleteTask(id:string){
        this.http.delete('https://angular-http-tutorial-2377a-default-rtdb.firebaseio.com/tasks/' + id + '.json').subscribe((response ) => {
            console.log(response)
        })
    }

    deleteAllTasks(){
        this.http.delete(this.url).subscribe((_) => {
        })
    }

    getAllTasks(){
        return this.http.get<{[key:string]: any}> (this.url)
            .pipe(map((response: any) => {
            let tasks = []
    
            for(let key in response){
                tasks.push({...response[key], id:key})
            }
    
            return tasks
            }
        ))
    }

    updateTask(id:string, data:any){
        return this.http.put('https://angular-http-tutorial-2377a-default-rtdb.firebaseio.com/tasks/' + id + '.json', data)
    }
}