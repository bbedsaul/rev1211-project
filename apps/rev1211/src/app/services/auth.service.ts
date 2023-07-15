import {Injectable} from '@angular/core';
import { Apollo } from 'apollo-angular';
import {Observable} from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import { NotificationService } from '@rev1211/rev1211-core';
import { User } from '../../../../../libs/data-access/src/lib/models/user';
import { UsersPermissionsLoginInput } from '../../../../../libs/data-access/src/lib/generated/generated';
import { LOGIN_MUTATION } from '../../../../../libs/data-access/src/lib/graphql/queries';
import { AUTH_TOKEN, USER_ID } from '../constants';

@Injectable()
export class AuthService {
  private userId: string | undefined = undefined;
  private user: User | undefined = undefined;

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

  setUser(user: User) {
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

  login(username:string,password:any) {

      let input: UsersPermissionsLoginInput = {
        identifier: username,
        // @ts-ignore
        password: password,
        provider: 'local'
      };
      this.apollo.mutate<any>({
        mutation: LOGIN_MUTATION,
        variables:  { input: input }
      }).subscribe({
        next: (result) => {
          localStorage.setItem(AUTH_TOKEN, result.data.login.jwt);
          this.setUserId(result.data.login.user.id);
          this.user = result.data.login.user;
          //this.login();
          //this.router.navigate(['/sprint']);
          this._isAuthenticated.next(true);
        }, error: (error) => {
          this.logout();
          this.notificationService.info('Error Logging in, Please try again');
      }});
      console.log("login success for username : " + input.identifier);
    }

  autoLogin() {
    const id = localStorage.getItem(USER_ID);

    if (id) {
      this.setUserId(id);
    }
  }
}
