import { LocalStorageService } from './../../services/local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  filterText = '';
  constructor(
    public authService: AuthService,
    private toastrService: ToastrService,
    private localStrageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    if (this.isAuthenticated()) {
      this.authService.userDetailFromToken();
    }

    var myModal = document.getElementById('myModal');
    var myInput = document.getElementById('myInput');

    myModal.addEventListener('shown.bs.modal', function () {
      myInput.focus();
    });
  }

  isAuthenticated() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      return false;
    }
  }

  checkAdminRole() {
    if (this.authService.role == 'admin') {
      return true;
    } else {
      return false;
    }
  }

  checkUserRole() {
    if (this.authService.role == 'user') {
      return true;
    } else {
      return false;
    }
  }
  checkNotRole() {
    if (this.authService.role == null) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    this.authService.logout();
  }
}
