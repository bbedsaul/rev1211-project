import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CoreModule} from '@rev1211/rev1211-core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from '@rev1211/data-access';
import { AuthGuardService } from '@rev1211/data-access';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { DataAccessModule} from "@rev1211/data-access";
import { CommonUiModule } from "@rev1211/common-ui";

import {
      FontAwesomeModule,
      FaIconLibrary
    } from '@fortawesome/angular-fontawesome';


import {
  faCog,
  faBars,
  faRocket,
  faPowerOff,
  faUserCircle,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(faPlayCircle, faCog,
  faBars,
  faRocket,
  faPowerOff,
  faUserCircle,
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube,);

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    FontAwesomeModule,

    // core
    CoreModule,

    // app
    AppRoutingModule,

    // material
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatButtonModule,

    CommonUiModule,
    DataAccessModule

  ],
  providers: [
    AuthService,
    AuthGuardService,
    DataAccessModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
