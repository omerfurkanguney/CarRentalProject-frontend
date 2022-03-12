import { Observable } from 'rxjs';
import { Rental } from './../models/rental';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44381/api/';
  constructor(private httpClient: HttpClient) {}

  add(rental: Rental): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'rentals/add';
    return this.httpClient.post<ResponseModel>(newPath, rental);
  }

  getrentals(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'rentals/getalldetail';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalByCarId(
    carId: number
  ): Observable<SingleResponseModel<RentalDetail>> {
    let newPath = this.apiUrl + 'rentals/getrentaldetailbycarid?carId=' + carId;
    return this.httpClient.get<SingleResponseModel<RentalDetail>>(newPath);
  }

  getRentalByUserId(
    userId: number
  ): Observable<ListResponseModel<RentalDetail>> {
    let newPath =
      this.apiUrl + 'rentals/getrentaldetailbyuserid?userid' + userId;
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }
}
