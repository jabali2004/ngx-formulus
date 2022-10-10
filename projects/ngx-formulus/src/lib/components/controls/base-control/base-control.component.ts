import type { OnInit } from '@angular/core';
import { Input, Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import type { IDynamicControl } from '../../../interfaces/dynamic-control';

@Component({
  selector: 'ngx-base-control',
  template: '',
})
export class BaseControlComponent implements OnInit {
  @Input() dynamicControl: IDynamicControl = {
    formControl: new UntypedFormControl(),
    formControlName: '',
    fullWidth: false,
    hidden: false,
    disabled: false,
  };

  constructor() {}

  ngOnInit(): void {}

  // ngOnChanges(): void {}
}
