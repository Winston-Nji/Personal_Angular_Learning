import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BindingPracticeComponent } from './binding-practice/binding-practice.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product/product.component';
import { FilterComponent } from './container/filter/filter.component';
import { ContainerComponent } from './container/container.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { setBackground } from './container/CustomDirectives/setBackground.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BindingPracticeComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ContainerComponent,
    ProductDetailComponent,
    setBackground
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
