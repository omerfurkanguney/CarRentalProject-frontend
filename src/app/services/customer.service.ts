import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44381/api/';
  constructor(private httpClient: HttpClient) {}

  getCustomer(): Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + 'customers/GetCustomersDetail';
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getCustomersByUserId(
    userId: number
  ): Observable<SingleResponseModel<Customer>> {
    let newPath = this.apiUrl + 'customers/getbyid?id=' + userId;
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
  }
}
