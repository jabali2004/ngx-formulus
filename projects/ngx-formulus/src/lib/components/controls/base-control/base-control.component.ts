import type { OnInit } from '@angular/core';
import { Input, Component } from '@angular/core';
import type { IDynamicControl } from '../../../interfaces/dynamic-control';

@Component({
  selector: 'ngx-base-control',
  template: '',
})
export class BaseControlComponent implements OnInit {
  @Input() dynamicControl: IDynamicControl | undefined | null = null;

  constructor() {}

  ngOnInit(): void {}

  // ngOnChanges(): void {}
}
