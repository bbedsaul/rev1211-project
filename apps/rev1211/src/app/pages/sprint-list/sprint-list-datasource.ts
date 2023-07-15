import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {distinctUntilChanged, map} from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {
  QueryService, SprintEntity,
  USER_PROFILE,
  UserProfileEntity,
  UserProfileFiltersInput
} from "@rev1211/data-access";
import {ComponentService} from "../../services/component.service";

/**
 * Data source for the SprintList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class SprintListDataSource extends DataSource<SprintEntity> {

  private userProfile: any | undefined = undefined;
  public user: UserProfileEntity | undefined = undefined;
  public sprints: SprintEntity[] = [];
  public facilitate: SprintEntity[] = [];
  public sponsored: SprintEntity[] = [];
  public data: SprintEntity[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(private componentService: ComponentService,
              private queryService: QueryService ) {
    super();

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
          let entity:SprintEntity;
          for (let i = 0; i < this.userProfile.userProfiles.data[0].attributes.sprints.data.length; i++) {
            this.sprints.push(this.userProfile.userProfiles.data[0].attributes.sprints.data[i]);
            this.data.push(this.userProfile.userProfiles.data[0].attributes.sprints.data[i]);
          }
          for (let i = 0; i < this.userProfile.userProfiles.data[0].attributes.facilitated.data.length; i++) {
            this.facilitate.push(this.userProfile.userProfiles.data[0].attributes.facilitated.data[i]);
            this.data.push(this.userProfile.userProfiles.data[0].attributes.sprints.data[i]);
          }
          for (let i = 0; i < this.userProfile.userProfiles.data[0].attributes.sponsors.data.length; i++) {
            this.sponsored.push(this.userProfile.userProfiles.data[0].attributes.sponsors.data[i]);
            this.data.push(this.userProfile.userProfiles.data[0].attributes.sprints.data[i]);
          }

          console.log(this.user);
        }
        console.log(this.userProfile);
      });
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<SprintEntity[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: SprintEntity[]): SprintEntity[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: SprintEntity[]): SprintEntity[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        //case 'name': return compare(a.name, b.name, isAsc);
        case 'description': // @ts-ignore
          return compare(+a.description, +b.description, isAsc);
        case 'title': // @ts-ignore
          return compare(+a.title, +b.title, isAsc);
        case 'id': // @ts-ignore
          return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
