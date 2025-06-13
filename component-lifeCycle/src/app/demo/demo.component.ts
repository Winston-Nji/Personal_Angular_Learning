import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {

  title:string = 'Demo Component'
  @Input() searchText:string = 'hello'

  constructor(){
    console.log('Demo component initiated')
    console.log(this.title)
    console.log(this.searchText)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ng OnChanges has been called')
    // console.log(changes)
  
  }

  ngOnInit(){
    console.log("ngOnitCalled")
    // this.searchText = 'No value yet'
    // console.log(this.searchText)
  }

  ngDoCheck(){
    console.log('ngDoCheck Called')
  }

}
