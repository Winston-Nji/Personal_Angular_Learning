import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Input() AllProductsLength:number

  @Input() inStockLength:number

  @Input() outOfStock:number

  selectedRadio:string = 'all'

  @Output()
  selectedRadioEmitter: EventEmitter<string> = new EventEmitter<string>()

  
  changeSelectedRadio(){
     (this.selectedRadio)
    this.selectedRadioEmitter.emit(this.selectedRadio)
  }
}
