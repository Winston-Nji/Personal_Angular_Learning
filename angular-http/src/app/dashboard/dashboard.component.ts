import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { map } from 'rxjs';
import { HTTPRequest } from '../Services/httpRequests.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{
  showCreateTaskForm: boolean = false;

  http:HttpClient = inject(HttpClient)

  allTasks: any[] = []

  ngOnInit(){
    this.fetchAllTasks()
  }

  taskService: HTTPRequest = inject(HTTPRequest)

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  CreateTask(data:any){
    this.taskService.CreateTask(data).subscribe((_) => {
          this.fetchAllTasks()
        })
    
  }

  private fetchAllTasks(){
    this.taskService.getAllTasks().subscribe((data) => {
        this.allTasks = data
    })
      
  }

  FetchAllTasksBtn(){
    this.fetchAllTasks()
  }

  clearAllTasks(){
    alert('Are you sure')

    this.taskService.deleteAllTasks()

    this.allTasks = []
    
  }

  DeleteTask(id:string){

    this.allTasks = this.allTasks.filter((task) => task.id !== id )
    
    this.taskService.deleteTask(id)

  }

  
}

