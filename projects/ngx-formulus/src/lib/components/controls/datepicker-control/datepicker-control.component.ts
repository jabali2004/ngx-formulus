import { Component } from '@angular/core';
import { BaseControlComponent } from '../base-control/base-control.component';

@Component({
  selector: 'ngx-datepicker-control',
  templateUrl: './datepicker-control.component.html',
  styleUrls: ['./datepicker-control.component.scss'],
})
export class DatepickerControlComponent extends BaseControlComponent {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
