import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ShippingInfoComponent } from './shipping-info/shipping-info.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { LoginComponent } from './login/login.component';
import { DataService } from './data.service';
import { TestingGeneralComponent } from './testing-general/testing-general.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'register-client', component: RegisterClientComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'shippinginfo', component: ShippingInfoComponent },
      { path: 'login', component: LoginComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ShippingInfoComponent,
    RegisterClientComponent,
    LoginComponent,
    TestingGeneralComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService, DataService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/