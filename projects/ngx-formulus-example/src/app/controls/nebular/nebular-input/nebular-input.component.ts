import { Component } from '@angular/core';
import { BaseControlComponent } from 'projects/ngx-formulus/src/public-api';

@Component({
  selector: 'app-nebular-input',
  templateUrl: './nebular-input.component.html',
  styleUrls: ['./nebular-input.component.scss'],
})
export class NebularInputComponent extends BaseControlComponent {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
