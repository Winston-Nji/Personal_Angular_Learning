import { Component, ViewChild } from '@angular/core';

import { Product } from '../Model/Product';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

  searchText:string = ''

    onSearchTextChange(value:string){
      this.searchText = value
  }

  @ViewChild(ProductListComponent) productList:ProductListComponent

  singleProduct:ProductListComponent

    ngAfterViewInit() {
      this.singleProduct = this.productList

       (this.productList, 'singleProd')
  }

}
