import { Component, OnInit } from '@angular/core';
import {
  Sprint,
  SprintEntity,
  SprintRelationResponseCollection,
  USER_PROFILE,
  UserProfileEntity,
  UserProfileFiltersInput
} from "@rev1211/data-access";
import {distinctUntilChanged} from "rxjs/operators";
import {of} from "rxjs";
import {Router} from "@angular/router";
import {QueryService, UserProfileEntityResponseCollection} from "@rev1211/data-access"
import {MatTableModule} from '@angular/material/table'
import { ComponentService } from '../../services/component.service';


@Component({
  selector: 'rev1211-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss'],
})
export class SprintComponent {

  private userProfile: any | undefined = undefined;
  public user: UserProfileEntity | undefined = undefined;
  public sprints: SprintEntity[] = [];
  public displayedColumns: string[] = [
    'title',
    'description',
  ];


  constructor(private queryService:QueryService,
              private componentService:ComponentService,
              private router:Router) {
  }

  ngOnInit(): void {

    let input:UserProfileFiltersInput = {
      email: {
        eq: 'bill.bedsaul@gmail.com'
      }
    }
    this.queryService.callQueryWithVariables(USER_PROFILE, input);
    this.queryService.queryResults
      .pipe(distinctUntilChanged()) // Only emit when the current value is different than the last
      .subscribe(results => {

        if(results.data !== undefined) {
          this.userProfile = results.data;
          this.userProfile = JSON.parse(JSON.stringify(results.data));
          this.sprints = [...this.userProfile.userProfiles.data[0].attributes.facilitated.data,
            ...this.userProfile.userProfiles.data[0].attributes.sprints.data,
            ...this.userProfile.userProfiles.data[0].attributes.sponsors.data];
          console.log(this.user);
        }
        console.log(this.userProfile);
      });
  }

  openCurrentSprint(sprint: SprintEntity) {
    this.componentService.setCurrentSprint(sprint);
    console.log('opening sprint');
    this.router.navigate(['/sprint-detail']);
  }

}
