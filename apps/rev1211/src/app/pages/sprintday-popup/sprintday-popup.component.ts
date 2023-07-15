import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'rev1211-sprintday-popup',
  templateUrl: './sprintday-popup.component.html',
  styleUrls: ['./sprintday-popup.component.scss'],
})
export class SprintdayPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<SprintdayPopupComponent>,
//    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
}
