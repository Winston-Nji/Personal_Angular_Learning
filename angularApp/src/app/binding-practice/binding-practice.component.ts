import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-practice',
  templateUrl: './binding-practice.component.html',
  styleUrl: './binding-practice.component.scss'
})
export class BindingPracticeComponent {
  cart:number = 0
  product = {
    productName: 'Iphone XR',
    inStock:10,
    color:'red',
    price: 1999,
    discount: 10,
    pImage: '/assets/image.png'
  }

  priceDiscount(){
    return (this.product.discount / 100) * this.product.price
  }

  decrement(){
    if(this.cart > 0){
      this.cart --
    }
  }

  increment(){
    if(this.cart !== this.product.inStock){
      this.cart++
    }
  }
}


