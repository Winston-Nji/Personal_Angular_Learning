import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

export class TaskService{
    // CreateTask: EventEmitter <string> = new EventEmitter<string>()

    CreateTask = new Subject<string>()

    emitEvent(value:string){
        this.CreateTask.next(value)
    }
}