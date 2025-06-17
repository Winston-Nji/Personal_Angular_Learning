import { Component } from '@angular/core';
import { TaskService } from '../Services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.scss']
})
export class ShowTaskComponent{
  tasks: string[] = ['task 1', 'task 2', 'task 3']

  constructor(private taskService:TaskService){

  }


  ngOnInit(){
    this.taskService.CreateTask.subscribe((data) => this.tasks.push(data))
  }

  

  
}
