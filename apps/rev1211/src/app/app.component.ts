import browser from 'browser-detect';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { environment as env } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { AUTH_TOKEN } from './constants';
import {
  routeAnimations,
  LocalStorageService,
//  selectSettingsStickyHeader,
//  selectSettingsLanguage,
//  selectEffectiveTheme,
} from '@rev1211/rev1211-core';

import { Router } from '@angular/router';
import { Apollo} from "apollo-angular";
import {
  faCog,
  faBars,
  faRocket,
  faPowerOff,
  faUserCircle,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'rev1211-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
})
export class AppComponent implements OnInit {
  bars = faBars;
  usercircle = faUserCircle;
  poweroff = faPowerOff;
  cog = faCog;

  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  // eslint-disable-next-line @typescript-eslint/no-var-requires
//  logoOne = require('../assets/rev1211.png').default;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
//  logoTwo = require('../assets/rev1211.png').default;
  languages = ['en', 'fr', 'es'];
  navigation = [
    {
      link: 'sprint',
      label: 'Sprints',
      children: [
        { link: 'sprint', label: 'My Sprints' },
        { link: 'sprintdetail', label: 'New Sprint' },
        { link: 'module', label: 'New Module' },
      ]
    },
  ];
  navigationSideMenu = [
    { link: 'sprint', label: 'My Sprints' },
    { link: 'sprintdetail', label: 'New Sprint' },
    { link: 'module', label: 'New Module' },
  ];

  stickyHeader$!: Observable<boolean>;
  language$!: Observable<string>;
  theme$!: Observable<any>;
  logged = false;

  tabWasClosed = false;

  constructor(
    private storageService: LocalStorageService,
    private authService: AuthService,
    private router: Router,
    private apollo: Apollo,
  ) {}

  /*
  private static isIEorEdgeOrSafari() {
    return (['ie', 'edge', 'safari'].includes(browser().name) );
  }
  */

  ngOnInit(): void {

    //check for Navigation Timing API support
    if (window.performance) {
      if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        localStorage.removeItem(AUTH_TOKEN);
        this.apollo.client.resetStore();
      }
    }

    this.authService.isAuthenticated
    .pipe(distinctUntilChanged()) // Only emit when the current value is different than the last
    .subscribe(isAuthenticated => {
      this.logged = isAuthenticated
      if(isAuthenticated)
        this.router.navigate(['/sprint']);
    });

    //this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.stickyHeader$ = of(true); //this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = of('en');
    this.theme$ = of('BLACK-THEME');
  }

  onLoginClick() {
//    this.store.dispatch(authLogin());
  }

  onLogoutClick() {
    this.authService.logout();
  //  this.store.dispatch(authLogout());
  }

  logout() {
    this.authService.logout();
  }

  doBeforeUnload() {
    if (document.visibilityState === 'hidden') {
      this.tabWasClosed = true;
    }

    return false;
  }

  doUnload() {
    if (this.tabWasClosed) {
      localStorage.removeItem(AUTH_TOKEN);
      this.apollo.client.resetStore();
    }
  }
}
