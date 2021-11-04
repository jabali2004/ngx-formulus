import { Component } from '@angular/core';
import { BaseControlComponent } from '../base-control/base-control.component';

@Component({
  selector: 'ngx-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
})
export class DynamicInputComponent extends BaseControlComponent {
  constructor() {
    super();
  }
}
