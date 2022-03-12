import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { RegisterComponent } from './components/register/register.component';
import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { LoginGuard } from './guards/login.guard';
import { RentacarComponent } from './components/rentacar/rentacar.component';
import { AdminGuard } from './guards/admin.guard';
import { AccountComponent } from './components/account/account.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FindexComponent } from './components/findex/findex.component';
import { RentedComponent } from './components/rented/rented.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/filter/:brandId/:colorId', component: CarComponent },
  { path: 'cars/add', component: CarAddComponent, canActivate: [AdminGuard] },
  { path: 'cars/brands/add', component: BrandAddComponent },
  { path: 'cars/colors/add', component: ColorAddComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cars/car-detail/:id', component: CarDetailComponent },
  {
    path: 'cars/rentacar/:id',
    component: RentacarComponent,
    canActivate: [LoginGuard],
  },
  { path: 'account', component: AccountComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'findex', component: FindexComponent },
  { path: 'rented', component: RentedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
