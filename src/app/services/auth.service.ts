import { RegisterModel } from './../models/registerModel';
import { Router } from '@angular/router';
import { TokenModel } from './../models/tokenModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { LoginModel } from './../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LocalStorageService } from './local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserModel } from '../models/userModel';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role: any;
  roles: any[] = [];
  name: string = '';
  surname: string = '';
  userId: number;
  email: string;
  token: any;
  apiUrl = 'https://localhost:44381/api/auth/';
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService,
    private jwtHelper: JwtHelperService
  ) {}

  // login(loginModel: LoginModel) {
  //   return this.httpClient.post<SingleResponseModel<TokenModel>>(
  //     this.apiUrl + 'login',
  //     loginModel
  //   );
  // }
  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    let newPath = this.apiUrl + 'login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      newPath,
      loginModel
    );
  }
  register(
    registerModel: RegisterModel
  ): Observable<SingleResponseModel<RegisterModel>> {
    let newPath = this.apiUrl + 'register';
    return this.httpClient.post<SingleResponseModel<RegisterModel>>(
      newPath,
      registerModel
    );
  }
  update(userModel: UserModel): Observable<SingleResponseModel<UserModel>> {
    let newPath = this.apiUrl + 'update';
    return this.httpClient.post<SingleResponseModel<UserModel>>(
      newPath,
      userModel
    );
  }
  isAuthenticated() {
    if (this.localStorageService.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  userDetailFromToken() {
    this.token = this.localStorageService.getItem('token');
    let decodedToken = this.jwtHelper.decodeToken(this.token);
    let name =
      decodedToken[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
      ];
    this.name = name.split(' ')[0];
    let surname =
      decodedToken[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
      ];
    this.surname = name.split(' ')[1];
    this.roles =
      decodedToken[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ];
    this.role =
      decodedToken[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ];
    this.userId = parseInt(
      decodedToken[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
      ]
    );
    this.email = decodedToken['email'];
  }

  roleCheck(roleList: string[]) {
    if (this.roles !== null) {
      roleList.forEach((role) => {
        if (this.roles.includes(role)) {
          return true;
        } else {
          return false;
        }
      });
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
    this.onRefresh();
    this.router.navigateByUrl('/');
  }

  async onRefresh() {
    //???
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    const currentUrl = this.router.url + '?';
    return this.router.navigateByUrl(currentUrl).then(() => {
      this.router.navigated = false;
      this.router.navigate([this.router.url]);
    });
  }
}
