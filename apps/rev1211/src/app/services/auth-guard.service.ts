import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { distinctUntilChanged } from 'rxjs/operators'

@Injectable()
export class AuthGuardService implements CanActivate {

  logged: boolean = false;

  constructor(public auth: AuthService, public router: Router) {
    this.auth.isAuthenticated
    .pipe(distinctUntilChanged()) // Only emit when the current value is different than the last
    .subscribe(isAuthenticated => {
      this.logged = isAuthenticated
    });
  }
  canActivate(): boolean {
    if (this.logged === false) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
