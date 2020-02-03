import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService) {
    this.loginForm = this.formBuilder.group({
      emailAddress: '',
      password: ''
    });}

  ngOnInit() {
    this.clients = this.dataService.getClients();
  }

  loginForm; 
  clients;
}