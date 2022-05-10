import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private toastr: ToastrService
  ) {}

  loginform = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}'
      ),
    ]),
  });

  ngOnInit(): void {}

  submitLoginForm(formData: any) {
    // console.log('allValues', formData.value);
    this._AuthService.login(formData.value).subscribe((response) => {
      if (response.message == 'success') {
        //save token in localstorage
        localStorage.setItem('userToken', response.token);
        console.log(response.token);

        //saveCurrentUser
        this._AuthService.saveCurrentUser();
        this.toastr.success('login successfully');
        this._Router.navigate(['home']);
      } else {
        var error = response.message;
        this.toastr.error(error);
      }
    });
  }
}
