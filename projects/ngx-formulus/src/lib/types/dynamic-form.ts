import type { FormGroup } from '@angular/forms';
import type { DynamicControl } from './dynamic-control';
import type { FormConfig } from './form-config';

export interface DynamicForm {
  config?: FormConfig;
  formGroup?: FormGroup;
  dynamicControls?: DynamicControl[];
}
