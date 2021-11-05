import { Component } from '@angular/core';
import { BaseControlComponent } from '../base-control/base-control.component';

@Component({
  selector: 'ngx-select-control',
  templateUrl: './select-control.component.html',
  styleUrls: ['./select-control.component.scss'],
})
export class SelectControlComponent extends BaseControlComponent {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
