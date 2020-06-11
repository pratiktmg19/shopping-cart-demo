import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  {path:'', component:ProductListComponent},
  {path:'products/:productId', component:ProductDetailComponent},
  {path:'cart', component:CartComponent},
  {path:'shipping', component:ShippingComponent},
  {path:'**', component:PageNotFoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
