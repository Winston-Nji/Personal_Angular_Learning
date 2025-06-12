import { Component, Input } from '@angular/core';
import { Product } from '../../Model/Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: Product
  
}
