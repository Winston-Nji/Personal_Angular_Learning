import { Component, EventEmitter, Output } from '@angular/core';
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



  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  EmitTaskData : EventEmitter<any> = new EventEmitter <any>()

  OnCloseForm(){
    this.CloseForm.emit(false);
  }

  OnFormSubmitted(form: NgForm){
    this.CloseForm.emit(false)
    this.EmitTaskData.emit(form.value)
    console.log(form.value)
  }
}
