import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; //http
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { RentacarComponent } from './components/rentacar/rentacar.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { AccountComponent } from './components/account/account.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FindexComponent } from './components/findex/findex.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { RentedComponent } from './components/rented/rented.component';
import { PaymentComponent } from './components/payment/payment.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    NaviComponent,
    FilterPipePipe,
    CarComponent,
    ColorComponent,
    BrandFilterPipe,
    ColorFilterPipe,
    CarFilterComponent,
    LoginComponent,
    RegisterComponent,
    CarDetailComponent,
    RentacarComponent,
    BrandAddComponent,
    ColorAddComponent,
    CarAddComponent,
    AccountComponent,
    CustomerComponent,
    FindexComponent,
    FooterComponent,
    CarUpdateComponent,
    RentedComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
