import { Component, Inject } from '@angular/core';
import { UserService } from '../../Services/User.services';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  usersList:any

  constructor(private users:UserService){

  }

  ngAfterViewInit(){
    this.usersList = this.users.getAllUsers()
  }

  // Click event on template
  viewUser(user:UserModel){
    this.users.onUserDetailClickedEmit(user)
  }
}