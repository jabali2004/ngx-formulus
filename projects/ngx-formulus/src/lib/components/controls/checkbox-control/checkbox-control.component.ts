import { Component } from '@angular/core';
import { BaseControlComponent } from '../base-control/base-control.component';

@Component({
  selector: 'ngx-checkbox-control',
  templateUrl: './checkbox-control.component.html',
  styleUrls: ['./checkbox-control.component.scss'],
})
export class CheckboxControlComponent extends BaseControlComponent {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
