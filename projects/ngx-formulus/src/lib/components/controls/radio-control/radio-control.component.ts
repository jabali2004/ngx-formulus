import { Component } from '@angular/core';
import { BaseControlComponent } from '../base-control/base-control.component';

@Component({
  selector: 'ngx-radio-control',
  templateUrl: './radio-control.component.html',
  styleUrls: ['./radio-control.component.scss'],
})
export class RadioControlComponent extends BaseControlComponent {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
