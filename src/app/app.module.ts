import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'



import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { FoodComponent } from './component/food/food.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';


// Msterial Ui
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';


import { PaymentComponent } from './component/payment/payment.component';

import { NgxPayPalModule } from 'ngx-paypal';
import { AuthGuard } from './auth.guard';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    FooterComponent,
    HomeComponent,
    FoodComponent,
    CartPageComponent,
    PaymentComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPayPalModule,


    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,



  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
