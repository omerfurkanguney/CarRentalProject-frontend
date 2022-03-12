import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { Payment } from '../models/payment';
import { CartItem } from '../models/cartItem';
import { Rental } from '../models/rental';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  apiUrl = 'https://localhost:44381/api/';
  constructor(private httpClient: HttpClient) {}

  addPayment(payment: Payment): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'payments/add';
    return this.httpClient.post<ResponseModel>(newPath, payment);
  }

  addToCart(rental: Rental) {
    let cartItem = new CartItem();
  }

  listCart(): CartItem[] {
    return CartItems;
  }
}
