import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Task } from '../Model/Task';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TaskService } from '../Services/task.service';
import { Subscription } from 'rxjs';
import { AuthServices } from '../Services/Auth-Services/auth.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  showCreateTaskForm: boolean = false;
  showTaskDetails: boolean = false;
  http: HttpClient = inject(HttpClient)
  allTasks: Task[] = [];
  taskService: TaskService = inject(TaskService);
  currentTaskId: string = '';
  isLoading: boolean = false;

  currentTask: Task | null = null;

  errorMessage: string | null = null;

  editMode: boolean = false;
  selectedTask: Task = {title: '', desc: '', assignedTo: '', createdAt: '', priority: '', status: ''};

  errorSub: Subscription = new Subscription();

  authService = inject(AuthServices)

  ngOnInit(){
      this.errorSub = this.taskService.errorSubject.subscribe({
        next: (httpError) => this.setErrorMessage(httpError)
      });
    this.fetchAllTasks();
      
    ;
  }

  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
    this.editMode = false;
    this.selectedTask = {title: '', desc: '', assignedTo: '', createdAt: '', priority: '', status: ''};
  }

  showCurrentTaskDetails(id: string | undefined){
    this.showTaskDetails = true;
    this.taskService.getTaskDetails(id).subscribe({
      next: (data: Task) => {
        this.currentTask = data;
      },
      error: (error) => {
        this.setErrorMessage(error);
      }
    });
  }

  CloseTaskDetails(){
    this.showTaskDetails = false;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  CreateOrUpdateTask(data: Task){
    if(!this.editMode) {
      // Create new task
      this.taskService.CreateTask(data).subscribe({
        next: (response) => {
          this.fetchAllTasks(); // Refresh the task list
          this.CloseCreateTaskForm();
        },
        error: (error) => {
          this.setErrorMessage(error);
        }
      });
    } else {
      // Update existing task
      this.taskService.UpdateTask(this.currentTaskId, data).subscribe({
        next: (response) => {

          this.fetchAllTasks(); // Refresh the task list
          this.CloseCreateTaskForm();
        },
        error: (error) => {
          this.setErrorMessage(error);
        }
      });
    }
  }

  FetchAllTaskClicked(){
    this.fetchAllTasks();
  }

  fetchAllTasks(){
    this.isLoading = true;

    this.taskService.GetAlltasks().subscribe({
      next: (tasks) => {
        this.allTasks = tasks;
        this.isLoading = false;
        console.log(this.allTasks)
      }, 
      error: (error) => {
        this.setErrorMessage(error);
        this.isLoading = false;
      }
    });
  }

  private setErrorMessage(err: HttpErrorResponse){
    if(err.error?.error === 'Permission denied'){
      this.errorMessage = 'You do not have permission to perform this action';
    } else {
      this.errorMessage = err.message;
    }

    setTimeout(() => {
      this.errorMessage = null;
    }, 3000);
  }

  DeleteTask(id: string | undefined){
    if(confirm('Are you sure you want to delete this task?')) {
      this.taskService.DeleteTask(id);
      // Add a small delay then refresh to ensure deletion is complete
      setTimeout(() => {
        this.fetchAllTasks();
      }, 500);
    }
  }

  DeleteAllTask(){
    if(confirm('Are you sure you want to delete all tasks?')) {
      this.taskService.DeleteAllTasks();
      // Add a small delay then refresh to ensure deletion is complete
      setTimeout(() => {
        this.fetchAllTasks();
      }, 500);
    }
  }

  OnEditTaskClicked(id: string | undefined){
    this.currentTaskId = id || '';
    
    // OPEN EDIT TASK FORM
    this.showCreateTaskForm = true;
    this.editMode = true;

    this.selectedTask = this.allTasks.find((task) => task.id === id) || 
                       {title: '', desc: '', assignedTo: '', createdAt: '', priority: '', status: ''};
  }
}