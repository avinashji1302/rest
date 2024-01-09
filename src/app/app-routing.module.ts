import { FoodComponent } from './component/food/food.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { PaymentComponent } from './component/payment/payment.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'food/:id' ,component: FoodComponent},
  {path:'cart-page' , component:CartPageComponent},
  {path:'payment' ,component: PaymentComponent},

  {path:'admin', loadChildren:()=>import('./main/main.module').then((m)=>m.MainModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
