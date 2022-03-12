import { Color } from './../models/color';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44381/api/';
  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + 'colors/getall';
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  getColorsById(colorId: number): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + 'colors/getbyid?brandId=' + colorId;
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  add(color: Color): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'colors/add';
    return this.httpClient.post<ResponseModel>(newPath, color);
  }
}