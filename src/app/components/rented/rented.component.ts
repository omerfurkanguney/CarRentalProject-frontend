import { AuthService } from 'src/app/services/auth.service';
import { RentalService } from './../../services/rental.service';
import { RentalDetail } from './../../models/rentalDetail';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rented',
  templateUrl: './rented.component.html',
  styleUrls: ['./rented.component.css'],
})
export class RentedComponent implements OnInit {
  rented: RentalDetail[] = [];
  constructor(
    private rentalService: RentalService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getRentalByUserId(this.authService.userId);
  }

  getRentalByUserId(userId: number) {
    this.rentalService.getRentalByUserId(userId).subscribe((response) => {
      this.rented = response.data;
    });
  }
}
