import { Component, inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authService = inject(AuthService)
  user: Object
  activeRoute : ActivatedRoute = inject(ActivatedRoute)
  logout:any
  router = inject(Router)

  LoginClicked(userName:string, passWord){
    this.user = this.authService.login(userName, passWord)

    if(this.user === undefined){
      alert("Couldn't find user")
    }else{
      alert('User Found')
      this.router.navigate(['/Courses'])
    }
  }

  ngOnInit(){
    this.activeRoute.queryParamMap.subscribe(queries => {
      this.logout = Boolean(queries.get('logout'))
    })

    if(this.logout){
      this.authService.logout()
      alert('Successfully loged out')
    }
  }




}


