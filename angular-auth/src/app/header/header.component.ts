import { Component, inject } from '@angular/core';
import { AuthServices } from '../Services/Auth-Services/auth.services';
import { User } from '../Model/User';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private authService = inject(AuthServices)
  isLoggedIn: boolean = false
  private userSubject: Subscription

  ngOnInit(){
    this.userSubject = this.authService.userSubject.subscribe({
      next : (user: User) => {
        this.isLoggedIn = user ? true : null
      }
    })
  }

  ngOnDestroy(){
    this.userSubject.unsubscribe()
  }

  onLogOut(){
    this.authService.logout()
  }
}
