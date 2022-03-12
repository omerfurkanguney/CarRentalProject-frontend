import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root',
})
export class CarImagesService {
  apiUrl = 'https://localhost:44381/api/';
  constructor(private httpClient: HttpClient) {}

  getCarImagesById(id: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carImages/getImagesByCarId?id=' + id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
