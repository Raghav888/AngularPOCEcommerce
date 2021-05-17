
import { ViewbycategoryProductComponent } from './viewbycategory-product/viewbycategory-product.component';
import { ViewallProductComponent } from './viewall-product/viewall-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [
  { path: '', component: ViewallProductComponent },
  { path: 'add-product', component: AddProductComponent },
  {path:'category/:id',component:ViewbycategoryProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
