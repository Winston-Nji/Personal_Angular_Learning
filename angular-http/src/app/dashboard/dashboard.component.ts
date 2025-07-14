import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, inject } from '@angular/core';
import { map } from 'rxjs';
import { HTTPRequest } from '../Services/httpRequests.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{
  showCreateTaskForm: boolean = false;
  showTaskDetails: boolean = false
  editMode:boolean = false
  selectedTask: any
  currentTaskId : string = ''
  loading:Boolean = false
  errorMessage: string = ''

  setDetailTask:any = {}


  http:HttpClient = inject(HttpClient)
  taskService: HTTPRequest = inject(HTTPRequest)

  allTasks: any[] = []


  ngOnInit(){
    this.fetchAllTasks()

    this.taskService.errorSubject.subscribe({
      next: (httpError) => {
        this.setErrorMessage(httpError)
      }
    })
  }

  closeDetailTaskView(data:any){
    if(data === true){
      this.showTaskDetails = false
    }
    
  }

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
       (this.currentTaskId)
       (data, 'updated task ')

      this.taskService.updateTask(this.currentTaskId, data).
      subscribe(() => {this.fetchAllTasks()});

    }
  }

  private fetchAllTasks(){
    this.loading = true
    this.taskService.getAllTasks().subscribe(
      {
        next: (data) => {
          this.allTasks = data
          this.loading = false
        },
        error: (error:any) => {
          this.loading = false
          this.setErrorMessage(error)
          // this.errorMessage = error.message
        }}
    )
  }

  private setErrorMessage(err: HttpErrorResponse){
     (err.error.error === '404 Not Found')

    if(err.error.error === '404 Not Found'){
      this.errorMessage = 'Page Not Found'
    }else{
      this.errorMessage = err.error.error;
      
    }
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

  viewTaskDetail(id:string){
    this.taskService.getSingleTask(id).subscribe({
      next: (task) => {
        this.setDetailTask = task
        this.showTaskDetails = true
      }
    })
  }

  
}

