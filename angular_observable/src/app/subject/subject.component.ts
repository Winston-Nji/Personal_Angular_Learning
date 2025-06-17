import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent {

  // ngOnInit(){
  //   // let obs = new Observable((observer) => {
  //   //   observer.next(Math.random())
  //   // })

  //   // const subject = new Subject<number>()

  //   const subject  = new BehaviorSubject <number>(100)

  //   // Sub1
  //   subject.subscribe((data) => {console.log(data)})


  //   // Sub2
  //   subject.subscribe((data) => {console.log(data)})

  //   subject.next(200)
  // }

  
}
