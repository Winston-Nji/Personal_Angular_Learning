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
  editMode:boolean = false
  selectedTask: any
  currentTaskId : string = ''

  http:HttpClient = inject(HttpClient)

  allTasks: any[] = []

  ngOnInit(){
    this.fetchAllTasks()
  }

  taskService: HTTPRequest = inject(HTTPRequest)

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
    this.editMode = false
    this.selectedTask = {title: '', desc: '', assingedTo:'', createdAt: '', priority:'', status:''}
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  CreateOrUpdateTask(data:any){
    if(!this.editMode){
      this.taskService.CreateTask(data).subscribe((_) => {
            this.fetchAllTasks()
          })
    }else{
      console.log(this.currentTaskId)
      console.log(data, 'updated task ')

      this.taskService.updateTask(this.currentTaskId, data).
      subscribe(() => {this.fetchAllTasks()});

    }
    
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

  onEditTaskClicked(id:string){
    this.showCreateTaskForm = true
    this.editMode = true

    this.selectedTask = this.allTasks.find((task) =>  task.id === id)

    this.currentTaskId = id
  } 

  
}

