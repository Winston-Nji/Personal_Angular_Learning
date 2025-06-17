import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrl: './unsubscribe.component.scss'
})
export class UnsubscribeComponent {

  counter = interval(500)

  data: number[] = []
  subscribed:any


  Subscribe(){
    this.subscribed =this.counter.subscribe(value => {
      this.data.push(value)
    })
  }

  UnSubscribe(){
    this.subscribed.unsubscribe()
  }

}
