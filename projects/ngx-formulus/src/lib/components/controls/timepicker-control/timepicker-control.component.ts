import { Component } from '@angular/core';
import { BaseControlComponent } from '../base-control/base-control.component';

@Component({
  selector: 'ngx-timepicker-control',
  templateUrl: './timepicker-control.component.html',
  styleUrls: ['./timepicker-control.component.scss'],
})
export class TimepickerControlComponent extends BaseControlComponent {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
