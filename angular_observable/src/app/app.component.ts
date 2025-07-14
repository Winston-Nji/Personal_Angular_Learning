import { Component } from '@angular/core';
import { Observable, observable, of, from, map, filter } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'angular-observables';

  data: any[] = [];

  // myObservable = new Observable((observer)=> {
  //     setTimeout(()=> {observer.next(1)}, 100)  
  //     setTimeout(()=> {observer.next(2)}, 2000)  
  //     setTimeout(()=> {observer.next(3)}, 2500)  
  //     setTimeout(()=> {observer.next(4)}, 3000)  
  //     setTimeout(()=> {observer.next(5)}, 3500)  
  //     setTimeout(()=> {observer.complete()}, 3500) 
  //   })



  // promiseData = new Promise ((resolve, reject)=> {
  //   resolve([1,2,3,4,5,5])
  // })


  // myObservable:any = from([1,2,3,4,5,6]).pipe(
  //   map((value:number) => value * 10), 
  //   filter((value:number) => value % 4 == 0)
  // )

  // getData(){

  //   this.data=[]

  //   this.myObservable.subscribe({
  //     next: (value:any) => {
  //       this.data.push(value)
  //        ('done')
  //     },
  //     error(){
  //        ("err")
  //     },
  //     complete(){
  //       alert('data fetched succesfully')
  //     }
  //   })

  // }

  promise = new Promise((resolve,reject) => {
     ('Promise is called')
    resolve(100)
  })

  obs = new Observable((observer) => {
    observer.next('Observable called')
  })

  

}