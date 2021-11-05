import { Component } from '@angular/core';
import { BaseControlComponent } from '../base-control/base-control.component';

@Component({
  selector: 'ngx-toggle-control',
  templateUrl: './toggle-control.component.html',
  styleUrls: ['./toggle-control.component.scss'],
})
export class ToggleControlComponent extends BaseControlComponent {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
