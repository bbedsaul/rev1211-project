import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { SignupComponent } from './login/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
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
import {FooterComponent} from "./footer/footer.component";

import {
  FaIconLibrary,
  FontAwesomeModule,
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

@NgModule({
  declarations: [LoginComponent, SignupComponent, FooterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,

    FontAwesomeModule,

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
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  exports: [
    FontAwesomeModule,
  ]
})
export class CommonUiModule { }
