import { Component } from '@angular/core';
import { BaseControlComponent } from '../base-control/base-control.component';

@Component({
  selector: 'ngx-text-control',
  templateUrl: './text-control.component.html',
  styleUrls: ['./text-control.component.scss'],
})
export class TextControlComponent extends BaseControlComponent {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
