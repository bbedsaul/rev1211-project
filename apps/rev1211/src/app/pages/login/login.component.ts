import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

import {
  ROUTE_ANIMATIONS_ELEMENTS,
  NotificationService,
} from '@rev1211/rev1211-core'

import { LoginForm } from './login-form.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {Apollo} from "apollo-angular";


@Component({
  selector: 'rev1211-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  });

  formValueChanges$!: Observable<LoginForm>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService,
    private apollo: Apollo,
  ) {}

  forgotPassword() {
    console.log("called forgotPassword()");
  }

  getUsers() {
    console.log("the form ", this.form);
    /*
    this.apollo.query({
      query: ALL_USERS
    }).subscribe((result) => {
      */
      /*
      const id = result.data.login.user.id;
      const token = result.data.login.token;
      this.saveUserData(id, token);
      */

      //console.log("this is the reault : " + result);

      /*
    }, (error) => {
      alert(error)
    });
    */
    console.log("called login()");
  }

  login() {

    this.authService.login(this.form.controls.username.value ?? '',
       this.form.controls.password.value);
  }

  reset() {
    this.form.reset();
    this.form.clearValidators();
    this.form.clearAsyncValidators();
  }

  update(form: LoginForm) {
    console.log("called update() with LoginForm");
  }
}
