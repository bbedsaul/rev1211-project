import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@rev1211/rev1211-core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DataAccessModule } from '@rev1211/data-access';

import {
  FontAwesomeModule,
  FaIconLibrary,
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
import { library } from '@fortawesome/fontawesome-svg-core';
import { SprintComponent } from './pages/sprint/sprint.component';
import { MatTableModule } from '@angular/material/table';
import { SprintListComponent } from './pages/sprint-list/sprint-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SprintDetailComponent } from './pages/sprint-detail/sprint-detail.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { ModuleDetailComponent } from './pages/module-detail/module-detail.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SprintdayPopupComponent } from './pages/sprintday-popup/sprintday-popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAccordion, MatExpansionModule} from "@angular/material/expansion";
import {MatNativeDateModule} from "@angular/material/core";
import {FooterComponent} from "./pages/footer/footer.component";
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';

library.add(
  faPlayCircle,
  faCog,
  faBars,
  faRocket,
  faPowerOff,
  faUserCircle,
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube
);

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,

    FontAwesomeModule,

    // core
    CoreModule,

    // material
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    DataAccessModule,


    // app
    AppRoutingModule,
  ],
  providers: [AuthService, AuthGuardService, DataAccessModule, MatDialogModule],
  declarations: [
    AppComponent,
    SprintComponent,
    FooterComponent,
    SprintListComponent,
    SprintDetailComponent,
    ModuleDetailComponent,
    SprintdayPopupComponent,
    SettingsComponent,
    ProfileComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
