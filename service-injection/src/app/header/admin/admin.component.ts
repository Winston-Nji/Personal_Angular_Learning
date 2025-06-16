import { Component, Inject } from '@angular/core';
import { UserService } from '../Services/User.services';
import { ConfirmationMsgService } from '../Services/Confirmation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  constructor(private userService: UserService, private confirmationService:ConfirmationMsgService){

  }

  addUser(){
    this.userService.createNewUser(this.name, this.gender, this.subType, this.status)

    this.confirmationService.confirmationMsg(this.name)
  }
}