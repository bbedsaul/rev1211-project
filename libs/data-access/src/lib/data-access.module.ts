import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryService} from "./data/query.service";
import { InMemoryCache} from "@apollo/client/core";
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import {HttpClientModule, HttpHeaders} from "@angular/common/http";
import {HttpLink} from "apollo-angular/http";

export {
  QueryService
};

@NgModule({
  imports: [
    CommonModule,
    ApolloModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            headers: new HttpHeaders({
              'Authorization': 'Bearer e1d0863a6cd4181b81eea56dcb7ccb2e020ba042cbf5ddb22ba73b594ffc9491fbdb035f5b14497a8220d6c0425867f3b3dcf57ffb334bf5c0495f9468aaca6d9676417e3e41b7541d0342339280125f366c893403493e58802348ccff53795a76934df33cc10b6c072f2fd14949c395e096b1de2d6645e42fb7b338a0a00f30'
            }),
           uri: 'http://192.168.0.26:1337/graphql'
//            uri: 'http://localhost:1337/graphql'
          })
        }
      },
      deps: [HttpLink]
    },
  ]
})
export class DataAccessModule {}
