import type { FormControl } from '@angular/forms';
import type { ControlType } from '../enums/control-type';

export interface IDynamicControl {
  formControlName: string;
  formControl: FormControl;
  label?: string;
  type?: ControlType;
  fullWidth: boolean;
  disabled: boolean;
  hidden: boolean;
}
