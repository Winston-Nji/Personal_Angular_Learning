import { AuthService } from './../../../Angular-Routing/src/app/Services/auth.service';
import { Component, inject } from '@angular/core';
import { AuthServices } from './Services/Auth-Services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  authService = inject(AuthServices)

  ngOnInit(){
    this.authService.autoLogin()
  }

}
