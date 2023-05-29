import {Injectable} from '@angular/core';
import { Apollo } from 'apollo-angular';
import {Observable} from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import { NotificationService } from '@rev1211/rev1211-core';
import {AUTH_TOKEN, USER_ID} from './constants';
import { UserProfile } from '../models/userprofile';

@Injectable()
export class AuthService {
  private userId: string | undefined = undefined;
  private user: UserProfile | undefined = undefined;

  private _isAuthenticated = new BehaviorSubject(false);

  constructor(private apollo:Apollo, private notificationService: NotificationService) {
  }

  get isAuthenticated(): Observable<boolean> {
    return this._isAuthenticated.asObservable();
  }

  saveUserData(id: string, token: string) {

    localStorage.setItem(USER_ID, id);
    localStorage.setItem(AUTH_TOKEN, token);
    this.setUserId(id);
  }

  setUser(user: UserProfile) {
    this.user = user;

    this.setUserId(user.id);
  }

  getUser() {
    return this.user;
  }

  setUserId(id: string) {
    this.userId = id;

    this._isAuthenticated.next(true);
  }

  getUserId(): string | undefined {
    return this.userId;
  }

  logout() {
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(AUTH_TOKEN);
    this.apollo.client.resetStore();
    this.userId = undefined;

    this._isAuthenticated.next(false);

    this.notificationService.info('You are now Logged out.');
  }

  login() {
    this._isAuthenticated.next(true);
  }

  autoLogin() {
    const id = localStorage.getItem(USER_ID);

    if (id) {
      this.setUserId(id);
    }
  }
}
