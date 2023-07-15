import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SprintListDataSource } from './sprint-list-datasource';
import {ComponentService} from "../../services/component.service";
import {QueryService, SprintEntity} from "@rev1211/data-access";
import {Router} from "@angular/router";

@Component({
  selector: 'rev1211-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.scss']
})
export class SprintListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<SprintEntity>;
  dataSource: SprintListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  public displayedColumns: string[] = [
    'id',
    'name',
    'title',
    'description',
    'start_date'
  ];

  constructor(private componentService: ComponentService,
              private queryService: QueryService,
              private router: Router) {
    this.dataSource = new SprintListDataSource(componentService, queryService);
  }

  openCurrentSprint(sprint: SprintEntity) {
    this.componentService.setCurrentSprint(sprint);
    console.log('opening sprint');
    this.router.navigate(['/sprint-detail']);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
