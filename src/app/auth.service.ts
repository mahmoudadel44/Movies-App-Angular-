import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _HttpClient: HttpClient,
    private _Router: Router,
    private toastr: ToastrService
  ) {
    if (localStorage.getItem('userToken') != null) {
      this.saveCurrentUser();
    }
  }

  currentUser = new BehaviorSubject(null);

  //Save Current User

  saveCurrentUser() {
    let token: any = localStorage.getItem('userToken');
    // this.currentUser = jwtDecode(token);
    this.currentUser.next(jwtDecode(token));

    console.log('currentUser', this.currentUser);
  }

  //Register

  register(formData: {}): Observable<any> {
    return this._HttpClient.post(
      'https://route-egypt-api.herokuapp.com/signup',
      formData
    );
  }

  //login

  login(formData: {}): Observable<any> {
    return this._HttpClient.post(
      'https://route-egypt-api.herokuapp.com/signin',
      formData
    );
  }

  //Logout
  logout() {
    this.currentUser.next(null);
    localStorage.removeItem('userToken');
    this.toastr.success('logout successfully');
    this._Router.navigate(['/login']);
  }
}
