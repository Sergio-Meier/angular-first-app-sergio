import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,) 
  { 
    this.checkoutForm = this.formBuilder.group({
      shippingType: this.cartService.shippingType,
      firstLastName: this.cartService.firstLastName,
      address: this.cartService.address,
      postalCodeCity: this.cartService.postalCodeCity,
      country: this.cartService.country
    });}

  ngOnInit() {
  }

  checkoutForm; 

  onSubmit(customerData) {
    this.cartService.shippingType = customerData.shippingType;
    this.cartService.firstLastName = customerData.firstLastName;
    this.cartService.address = customerData.address;
    this.cartService.postalCodeCity = customerData.postalCodeCity;
    this.cartService.country = customerData.country;
    // Process checkout data here
    //console.warn('Your order has been submitted', customerData);

    //this.items = this.cartService.clearCart();
    // this.checkoutForm.reset();
  }

}