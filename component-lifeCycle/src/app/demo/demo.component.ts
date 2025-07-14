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
     ('Demo component initiated')
     (this.title)
     (this.searchText)
  }

  ngOnChanges(changes: SimpleChanges){
     ('ng OnChanges has been called')
    //  (changes)
  
  }

  ngOnInit(){
     ("ngOnitCalled")
    // this.searchText = 'No value yet'
    //  (this.searchText)
  }

  ngDoCheck(){
     ('ngDoCheck Called')
  }

}
