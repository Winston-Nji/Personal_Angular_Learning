import { AuthService } from './../../../../Angular-Routing/src/app/Services/auth.service';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServices } from '../Services/Auth-Services/auth.services';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../Model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLogedIn:boolean = true 
  authService = inject(AuthServices)
  errorMessage : string = null

  toggleLogIn(){
    console.log('clicked')
    this.isLogedIn = !this.isLogedIn
  }

  FormSubmitted(form: NgForm){
    console.log(form.value)
    const email = form.value.email
    const password = form.value.password

    if(this.isLogedIn){
        this.authService.login(email,password).subscribe({
          next: (response) => {
            console.log(response)

          },
          error: (err) => {
            this.errorHandlerFunction(err)
          }
        })
    }else{
      this.authService.signUp(email, password).subscribe({
        next: (response) => {
          console.log(response)
        },
        error: (err) => {
          this.errorHandlerFunction(err)
        }
      })
    }

    form.reset()
    
  }

  private errorHandlerFunction(err: HttpErrorResponse){
    
    console.log(err.error.error.message)
    
    switch(err.error.error.message){
      case('EMAIL_EXISTS') : 
        this.errorMessage = 'This user is already Registed, Sign-In instead'
        break
      case('OPERATION_NOT_ALLOWED'): 
        this.errorMessage = 'Error Occured on the server'
        break
      case('TOO_MANY_ATTEMPTS_TRY_LATER'): 
this.errorMessage = 'Unusual activity detected. Try again Later'
        break
      case('EMAIL_NOT_FOUND'): 
        this.errorMessage = 'User Not Found'
        break
      case('INVALID_PASSWORD'): 
        this.errorMessage = 'Email or Password Invalid'
        break
      case('INVALID_LOGIN_CREDENTIALS'): 
      this.errorMessage = 'Email or Password Invalid'
      break
    }

    if(this.errorMessage){
      setTimeout(() => {
        this.errorMessage = null
      }, 2000)
    }
      
  }
}
