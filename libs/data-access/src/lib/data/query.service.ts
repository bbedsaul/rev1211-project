import { Injectable } from '@angular/core';
import {Apollo} from "apollo-angular";
import {BehaviorSubject, Observable} from "rxjs";
import {NotificationService} from "@rev1211/rev1211-core";



@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private _results: BehaviorSubject<any> = new BehaviorSubject({});
  constructor(private apollo:Apollo,
              private notificationService:NotificationService) { }

  get queryResults(): Observable<any> {
    return this._results.asObservable();
  }

  callQueryWithVariables(queryName:any,input:any) {

    this.apollo.query<any>({
      query: queryName,
      variables:  { input: input }
    }).subscribe({
      next: (result) => {
        this._results.next(result);
      }, error: (error) => {
        this.notificationService.info(error);
      }
    });
  }
}
