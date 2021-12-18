import { Component } from '@angular/core';
import { BaseControlComponent } from '../base-control/base-control.component';

@Component({
  selector: 'ngx-textarea-control',
  templateUrl: './textarea-control.component.html',
  styleUrls: ['./textarea-control.component.scss'],
})
export class TextareaControlComponent extends BaseControlComponent {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
