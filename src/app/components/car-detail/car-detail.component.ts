import { RentalService } from './../../services/rental.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { CarImagesService } from './../../services/car-images.service';
import { CarService } from './../../services/car.service';
import { CarImage } from './../../models/carImage';
import { CarDto } from './../../models/carDto';
import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { Rental } from 'src/app/models/rental';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDto;
  carImages: CarImage[] = [];
  rentalsByCarId: RentalDetail;
  rentals: Rental[];
  constructor(
    private carService: CarService,
    private carImagesService: CarImagesService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private rentalService: RentalService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarsById(params['id']);
        this.getImagesById(params['id']);
        this.getRentalByCarId(params['id']);
      }
      this.getRentals();
    });
  }

  getCarsById(id: number) {
    this.carService.getCarDetailById(id).subscribe((response) => {
      this.carDetails = response.data[0];
    });
  }

  getImagesById(id: number) {
    this.carImagesService.getCarImagesById(id).subscribe((response) => {
      this.carImages = response.data;
    });
  }
  getRentals() {
    this.rentalService.getrentals().subscribe((response) => {
      this.rentals = response.data;
    });
  }
  getRentalByCarId(id: number) {
    this.rentalService.getRentalByCarId(id).subscribe((response) => {
      this.rentalsByCarId = response.data;
    });
  }
  check(id: number) {
    this.rentals.find(function (element) {
      if (element.carId === id && element.returnDate === null) {
        return false; //arac kiralanamaz
      } else {
        return true; //kiralanabilir
      }
    });
  }
  checkAdminRole() {
    if (this.authService.role == 'admin') {
      return true;
    } else {
      return false;
    }
  }
}
