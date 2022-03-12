import { CarDto } from './../models/carDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44381/api/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    //CarDto
    let newPath = this.apiUrl + 'cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsDto(): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + 'cars/cardetails';
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarDetailById(carId: number): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + 'cars/GetCarDetailById?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarsById(id: number): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + 'cars/getbyid?id=' + id;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + 'cars/carsdetailsbybrandId?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + 'cars/getcarsbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarsByBrandIdandColorId(
    colorId: number,
    brandId: number
  ): Observable<ListResponseModel<CarDto>> {
    let newPath =
      this.apiUrl +
      'cars/getbybrandidandcolorid?brandId=' +
      brandId +
      '&colorId=' +
      colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  add(car: Car): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'cars/add';
    return this.httpClient.post<ResponseModel>(newPath, car);
  }

  update(car: Car): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'cars/update';
    return this.httpClient.post<ResponseModel>(newPath, car);
  }
}
