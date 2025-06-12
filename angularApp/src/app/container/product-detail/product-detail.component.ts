import { Component, Input } from '@angular/core';
import { Product } from '../../Model/Product';
import { ProductListComponent } from '../product-list/product-list.component';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})

export class ProductDetailComponent {
    
  @Input() productList:any

  product:Product  

  ngOnInit(){
    this.product = this.productList.singleProduct
  }

    
}
