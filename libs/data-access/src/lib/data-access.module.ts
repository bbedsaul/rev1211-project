import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@rev1211/rev1211-core';
import { AuthService } from './auth/auth.service';
import { AuthGuardService} from "./auth/auth-guard.service";
import { InMemoryCache} from "@apollo/client/core";
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import {HttpClientModule} from "@angular/common/http";
import {HttpLink} from "apollo-angular/http";

export {
  AuthService,
  AuthGuardService
};

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ApolloModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuardService,
    AuthService,
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:1337/graphql'
          })
        }
      },
      deps: [HttpLink]
    },
  ]
})
export class DataAccessModule {}
