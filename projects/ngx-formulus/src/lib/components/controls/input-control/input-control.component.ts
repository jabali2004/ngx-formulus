import { Component } from '@angular/core';
import { BaseControlComponent } from '../base-control/base-control.component';

@Component({
  selector: 'ngx-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss'],
})
export class InputControlComponent extends BaseControlComponent {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
