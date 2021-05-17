import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewallProductComponent } from './viewall-product/viewall-product.component';
import { ViewbycategoryProductComponent } from './viewbycategory-product/viewbycategory-product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    ViewallProductComponent,
    ViewbycategoryProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
