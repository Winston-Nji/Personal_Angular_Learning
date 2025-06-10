import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-practice',
  templateUrl: './binding-practice.component.html',
  styleUrl: './binding-practice.component.scss'
})
export class BindingPracticeComponent {
  product = {
    productName: 'Iphone XR',
    inStock:0,
    color:'red',
    price: 1999,
    discount: 10,
    pImage: '/assets/image.png'
  }

  priceDiscount(){
    return (this.product.discount / 100) * this.product.price
  }
}
