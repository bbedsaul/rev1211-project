import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@rev1211/rev1211-core';
import { AuthService } from './auth/auth.service';
import { AuthGuardService} from "./auth/auth-guard.service";

export {
  AuthService,
  AuthGuardService
};

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
})
export class DataAccessModule {}
