import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatListModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
declarations: [
  AppComponent,
  TopBarComponent,
  ProductListComponent,
  ProductAlertComponent,
  ProductDetailsComponent,
  CartComponent,
  ShippingComponent,
],
imports: [
  BrowserModule,
  AppRoutingModule,
  ReactiveFormsModule,
  HttpClientModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatListModule,
  RouterModule.forRoot([
    { path: '', component: ProductListComponent },
    { path: 'products/:productId', component: ProductDetailsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'shipping', component: ShippingComponent },
  ]),
  BrowserAnimationsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
