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

  public onChange($event: Event): void {
    if ($event) {
      const target = $event.target as HTMLInputElement;
      this.dynamicControl.formControl.setValue(target.checked);
    }
  }
}
