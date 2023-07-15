import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';
import {MatAccordion} from '@angular/material/expansion';
import {FormBuilder, Validators} from '@angular/forms';
import {Enum_Sprint_Type, QueryService, Sprint, SprintEntity, UserProfileEntity} from "@rev1211/data-access";
import {ComponentService} from "../../services/component.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {SprintdayPopupComponent} from "../sprintday-popup/sprintday-popup.component";

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'rev1211-sprint-detail',
  templateUrl: './sprint-detail.component.html',
  styleUrls: ['./sprint-detail.component.scss'],
  providers: [DatePipe],
})

export class SprintDetailComponent implements OnInit {
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public minDate:Date = new Date();
  public maxDate:Date = new Date();
  public stepHour = 1;
  public stepMinute = 30;
  public stepSecond = 1;
  public title = 'Sprint Details';
  types: Type[] = [
    {value: Enum_Sprint_Type.Starter, viewValue: Enum_Sprint_Type.Starter},
    {value: Enum_Sprint_Type.Second, viewValue: Enum_Sprint_Type.Second},
  ];

  sprinterColumns: string[] = [
    'firstname',
    'lastname',
    'email',
  ];
  facilitatorColumns: string[] = [
    'firstname',
    'lastname',
    'email',
  ];
  sponsorColumns: string[] = [
    'firstname',
    'lastname',
    'email',
  ];
  daysColumns: string[] = [
    'name',
    'title',
  ];
  sprinters: UserProfileEntity[] = [];
  facilitators: UserProfileEntity[] = [];
  sponsors: UserProfileEntity[] = [];

  private fb = inject(FormBuilder);
  sprintForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    end:[new Date(), Validators.required],
    start:[new Date(), Validators.required],
    type: ['', Validators.required],
    location: ['', Validators.required],
    modulename: ['', Validators.required]
  });

  public currentSprint:SprintEntity | undefined;
  public editMode:boolean = false;

  constructor(private queryService:QueryService,
              private componentService:ComponentService,
              public dialog: MatDialog) {
    this.maxDate.setMonth(this.maxDate.getMonth() + 6);
    this.currentSprint = componentService.getCurrentSprint();

    this.sprintForm.setValue({
      title: this.currentSprint?.attributes?.title as string,
      description: this.currentSprint?.attributes?.description as string,
      start: this.currentSprint?.attributes?.start_date as Date,
      end: this.currentSprint?.attributes?.end_date as Date,
      type: this.currentSprint?.attributes?.description as string,
      location: this.currentSprint?.attributes?.description as string,
      modulename: this.currentSprint?.attributes?.module?.data?.attributes?.name as string
    });
  }

  ngOnInit() {
    this.sprinters = this.componentService.getCurrentSprinters();
    this.facilitators = this.componentService.getCurrentFacilitators();
    this.sponsors = this.componentService.getCurrentSponsors();
  }

  getTimeAsString(date: Date) {
    return `${date.getHours()}:${(date.getMinutes() < 10 ? "0" : "") +
    date.getMinutes()}`;
  }

  openDialog() {
    const dialogRef = this.dialog.open(SprintdayPopupComponent, {
      //data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
    console.log('Opening dialog');
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
