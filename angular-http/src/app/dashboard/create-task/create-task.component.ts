import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {

  task = {
  title: '',
  desc: '',
  assignedTo: '',
  createdAt: '',
  priority: '',
  status: ''
};

  @Input() isEditMode: boolean = false

  @Input() selectedTask: any

  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  EmitTaskData : EventEmitter<any> = new EventEmitter <any>()

  @ViewChild('taskForm') taskForm: any

  ngAfterViewInit(){
    console.log(this.taskForm)
    setTimeout(() => {
      this.taskForm.form.patchValue(this.selectedTask) 
    }, 0)
      
  }

  OnCloseForm(){
    this.CloseForm.emit(false);
  }

  OnFormSubmitted(form: NgForm){
    this.CloseForm.emit(false)
    this.EmitTaskData.emit(form.value)
    console.log(form.value, 'updated')
  }
}
