import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

import {
  ROUTE_ANIMATIONS_ELEMENTS,
  NotificationService,
  LocalStorageService,
} from '@rev1211/rev1211-core'

import { LoginForm } from './login-form.model';
import { Router } from '@angular/router';
import { AuthService } from '@rev1211/data-access';

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
    private localStorageService: LocalStorageService,
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

  /*
  createSticky() {

    let newSticky: StickyInput = {
        name: "testSticky1",
        description: "This is a test create",
    		points: 25,
    		status: Enum_Stickies_Status.Todo,
    		sprint: "60fdc029b58375b2db26b6fd",
    		sprinter: "60fdc69fb58375b2db26b721"
    }

    const newInput: CreateStickyInput = {
      data: newSticky
    }

    console.log("the form ", this.form);
    this.apollo.mutate<any>({
      mutation: CREATE_STICKY,
      variables:  { input: newInput }
    }).subscribe((result) => {
      this.router.navigate(['/']);
    }, (error) => {
      alert(error)
    });
  }
  */

  login() {

    //this.getUsers();
    /*
    let input2: UsersPermissionsLoginInput;
    */

    /*
    let newSticky: StickyInput = {
      name: "testSticky1",
      description: "This is a test create",
      points: 25,
      status: Enum_Stickies_Status.Todo,
      sprint: "60fdc029b58375b2db26b6fd",
      sprinter: "60fdc69fb58375b2db26b721"
    }

    let input: UsersPermissionsLoginInput = {
      identifier: this.form.controls.username.value,
      password: this.form.controls.password.value,
      provider: 'local'
    };

    console.log("the form ", this.form);
    this.apollo.mutate<any>({
      mutation: LOGIN_MUTATION,
      variables:  { input: input }
    }).subscribe((result) => {
      localStorage.setItem(AUTH_TOKEN, result.data.login.jwt);
      this.authService.setUserId(result.data.login.user.id);
      this.authService.login();
      this.router.navigate(['/sprint']);
    }, (error) => {
      this.authService.logout();
      this.notificationService.info('Error Logging in, Please try again');
    });
    */
//    console.log("login success for username : " + input.identifier);
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
