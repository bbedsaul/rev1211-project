import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import {SprintListComponent} from "./pages/sprint-list/sprint-list.component";
import {ModuleDetailComponent} from "./pages/module-detail/module-detail.component";
import {SprintDetailComponent} from "./pages/sprint-detail/sprint-detail.component";
import {LoginComponent} from "./pages/login/login.component";
import { LoginModule } from "./pages/login/login.module";
import {ProfileComponent} from "./pages/profile/profile.component";
import {SettingsComponent} from "./pages/settings/settings.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'sprint',
    component: SprintListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sprint-list',
    component: SprintListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sprint-detail',
    component: SprintDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'module',
    component: ModuleDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'logout',
    loadChildren: () =>
      import('./pages/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  /*
  {
    path: 'sprint-admin',
    loadChildren: () =>
      import('./whiteboard/admin/admin.module').then(
        (m) => m.AdminModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'next-sprint',
    loadChildren: () =>
      import('./whiteboard/next/next.module').then(
        (m) => m.NextModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'sprint-history',
    loadChildren: () =>
      import('./whiteboard/history/history.module').then(
        (m) => m.HistoryModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'whiteboard',
    loadChildren: () =>
      import('./whiteboard/whiteboard.module').then(
        (m) => m.WhiteboardModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then(
        (m) => m.SettingsModule
      ),
    canActivate: [AuthGuard],
  },
  */
  {
    path: 'logout',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./app.module').then(
        (m) => m.AppModule
      ),
  },
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
