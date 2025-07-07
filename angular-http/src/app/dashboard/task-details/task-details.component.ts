import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent implements OnInit {

  @Input() task:any

  @Output() closeDetailTask = new EventEmitter<boolean>()

  showDetailTask(){
    console.log(this.task)
  }

  ngOnInit(){
    this.showDetailTask()
  }

  closeDetailedView(){
    this.closeDetailTask.emit(true)
    console.log('emmited')
  }

  
}
