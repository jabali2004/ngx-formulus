import { Component } from '@angular/core';
import { BaseControlComponent } from '../base-control/base-control.component';

@Component({
  selector: 'ngx-dynamic-checkbox',
  templateUrl: './dynamic-checkbox.component.html',
  styleUrls: ['./dynamic-checkbox.component.scss'],
})
export class DynamicCheckboxComponent extends BaseControlComponent {
  constructor() {
    super();
  }
}
