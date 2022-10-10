import type { UntypedFormControl } from '@angular/forms';
import type { ControlType } from '../enums/control-type';
import type { IDynamicData } from './dynamic-data';

export interface IDynamicControl {
  formControlName: string;
  formControl: UntypedFormControl;
  label?: string;
  type?: ControlType;
  fullWidth: boolean;
  disabled: boolean;
  hidden: boolean;
  data?: IDynamicData[];
}
