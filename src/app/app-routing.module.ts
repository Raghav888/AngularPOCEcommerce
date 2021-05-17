import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CheckoutComponent } from './orders/checkout/checkout.component';
import { CartComponent } from './orders/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewallProductComponent } from './products/viewall-product/viewall-product.component';
import { OrderconfirmComponent } from './orders/orderconfirm/orderconfirm.component';

const routes: Routes = [
{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
{ path: '', component: ViewallProductComponent },
{path:'order/cart',component:CartComponent},
{path:'order/checkout',component:CheckoutComponent},
{path:'order/orderconfirm',component:OrderconfirmComponent},
{path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
