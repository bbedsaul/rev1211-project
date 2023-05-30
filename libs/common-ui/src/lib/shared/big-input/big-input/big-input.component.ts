import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rev1211-big-input',
  templateUrl: './big-input.component.html',
  styleUrls: ['./big-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BigInputComponent {
  @Input()
  placeholder!: string;

  @Input()
  value = '';
  @Input()
  disabled = false;

  hasFocus = false;
}
