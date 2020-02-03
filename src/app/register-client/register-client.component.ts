import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.registerForm = this.formBuilder.group({
      id: '',
      emailAddress: '',
      firstName: '',
      lastName: '',
      address: '', 
      postalCode: '', 
      city: '',
      country: '',
      isTest: true,
      favoriteColor: null,
      dateOfBirth: null,
      registeredOn: null,
      favoriteNumber: null,
      password: '',
      gender: null,
      mainPhone: '',
      getUpTime: null,
      url: ''
    });}

  ngOnInit() {
  }

  registerForm; 

}