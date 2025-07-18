import { Component, inject, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../Services/User.services';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  selectedUser: UserModel;

  constructor(private userService:UserService){
  }

  ngOnInit() {
    this.userService.userServiceEmitter.subscribe((data: UserModel) => {
      this.selectedUser = data;
       (this.selectedUser, 'selectedUser');
    });
  }
}
