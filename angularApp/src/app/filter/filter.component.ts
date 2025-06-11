import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Input() AllProductsLength:number

  @Input() inStockLength:number

  @Input() outOfStock:number
}
