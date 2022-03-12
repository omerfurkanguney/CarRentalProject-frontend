import { CarDto } from './../../models/carDto';
import { ToastrService } from 'ngx-toastr';
import { CarService } from './../../services/car.service';
import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carsDto: CarDto[] = [];
  dataLoaded = false;
  filterText = '';
  constructor(
    private carService: CarService,
    private activedRoute: ActivatedRoute,
    private ToastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getCarByFilters(params['brandId'], params['colorId']);
      } else if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else {
        this.getCarsDto();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsDto() {
    this.carService.getCarsDto().subscribe((response) => {
      this.carsDto = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsById(id: number) {
    this.carService.getCarsById(id).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.carsDto = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.carsDto = response.data;
      this.dataLoaded = true;
    });
  }
  getCarByFilters(colorId: number, brandId: number) {
    this.carService
      .getCarsByBrandIdandColorId(brandId, colorId)
      .subscribe((response) => {
        this.carsDto = response.data;
        this.dataLoaded = true;
      });
  }
}
