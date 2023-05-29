import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { filter, debounceTime, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {
  ROUTE_ANIMATIONS_ELEMENTS,
  NotificationService,
  CoreModule,
} from '@rev1211/rev1211-core';

import { SignupForm } from './signup-form.model';

@Component({
  selector: 'rev1211-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {


  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  });

  formValueChanges$!: Observable<SignupForm>;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) {}

  reset() {
    console.log("called signup()");
  }

  signup() {
    console.log("called signup()");
  }

  update(form: SignupForm) {
    console.log("called update() with SignupForm");
  }
}
