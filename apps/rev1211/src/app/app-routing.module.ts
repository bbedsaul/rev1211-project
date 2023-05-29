import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {
  AuthGuardService as AuthGuard
} from '@rev1211/data-access';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  /*
  {
    path: 'sprint',
    loadChildren: () =>
      import('./sprint/sprint.module').then(
        (m) => m.SprintModule
      ),
    canActivate: [AuthGuard],
  },
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
    path: 'login',
    loadChildren: () =>
      import('@rev1211/common-ui').then(
        (m) => m.CommonUiModule
      ),
  },
  {
    path: 'logout',
    loadChildren: () =>
      import('@rev1211/common-ui').then(
        (m) => m.CommonUiModule
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
