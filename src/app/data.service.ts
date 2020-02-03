import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {providedIn: 'root'}
)
export class DataService {

  constructor(
    private http: HttpClient) { }

  getClients() {
    return this.http.get('/assets/clients.json');
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}