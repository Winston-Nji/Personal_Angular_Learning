import { Component } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { noSpaceAllowed } from '../Validators/custom.validators';
import { checkUserName } from '../Validators/custom.validators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reactiveForm';
  userName:String = ''
  reactiveForm : FormGroup;
  formData: any 

  ngOnInit(){
    this.reactiveForm = new FormGroup ({
      firstname : new FormControl(null, [Validators.required, noSpaceAllowed]),
      lastname : new FormControl(null, Validators.required),
      email : new FormControl(null, [Validators.required, Validators.email]),
      username : new FormControl(null, Validators.required ,checkUserName),
      dob : new FormControl(null),
      gender : new FormControl(null),
      address: new FormGroup({
        street : new FormControl(null, Validators.required),
        country : new FormControl('America', Validators.required),
        city : new FormControl(null, Validators.required),
        region : new FormControl(null, Validators.required),
        portal : new FormControl(null, Validators.required),
      }),
      skills: new FormArray([
        new FormControl(null, Validators.required),
      ]),
      experience : new FormArray([
        new FormGroup({
          company: new FormControl(null),
          position: new FormControl(null),
          years: new FormControl(null),
          start: new FormControl(null),
          end: new FormControl(null),
        })
      ])
      
    })
  }

  OnFormSubmitted(){
    console.log('clicked')
    console.log(this.reactiveForm, 'reavtieForm')
    this.formData = this.reactiveForm.value
  }

  addSkill(){
    (this.reactiveForm.get('skills') as FormArray).push(new FormControl(null, Validators.required))
  }

  deleteSkill(index:number){
    const controls = this.reactiveForm.get('skills') as FormArray
    controls.removeAt(index)
  }

  addExperience(){
    (this.reactiveForm.get('experience') as FormArray).push(
      new FormGroup({
        company: new FormControl(null, Validators.required),
        position: new FormControl(null, Validators.required),
        years: new FormControl(null, Validators.required),
        start: new FormControl(null, Validators.required),
        end: new FormControl(null, Validators.required),
      })
    )
  }

  deleteExperience(index:number){
    const group = this.reactiveForm.get('experience') as FormArray
    group.removeAt(index)
  }

  createUserName(){

      const firstName:String = this.reactiveForm.get('firstname').value
      const lastName:String = this.reactiveForm.get('lastname').value
      const dob:Number = new Date(this.reactiveForm.get('dob').value).getFullYear()
      console.log(firstName.slice(0,3), lastName, dob)

      this.userName +=  firstName.slice(0,3) +  lastName.slice(0,3) +  this.userName + dob

    // this.reactiveForm.setValue({
    //   firstname : this.reactiveForm.get('firstname').value,
    //   lastname : this.reactiveForm.get('lastname').value,
    //   email : this.reactiveForm.get('email').value,
    //   username : this.userName,
    //   dob : this.reactiveForm.get('dob').value,
    //   gender : this.reactiveForm.get('gender').value,
    //   address: {
    //     street : '',
    //     country : '',
    //     city : '',
    //     region : '',
    //     portal : '',
    //   },
    //   skills: this.reactiveForm.get('skills').value,
    //   experience : this.reactiveForm.get('experience').value
    // })

    this.reactiveForm.patchValue({
      username:this.userName
    })

      // return this.userName
  }

    

  
}
