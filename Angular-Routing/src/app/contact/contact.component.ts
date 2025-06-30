import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName:string = ''
  lastName:string = ''
  country:string = ''
  message:string = ''

  isSubmitted:Boolean = false

  onSubmit(){
    this.isSubmitted = true
  }

  canExit(){
    if((this.firstName || this.lastName || this.message) && !this.isSubmitted){
      return confirm ('You have unsaved changes do you want ot navigate away. ')
    }else{
      return true
    }
  }
}
