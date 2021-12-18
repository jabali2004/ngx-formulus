import type { ControlType } from '../enums/control-type';
import type { IDynamicData } from './dynamic-data';

export interface IDynamicOverride {
  formControlName?: string;
  label?: string;
  type?: ControlType;
  fullWidth?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  data?: IDynamicData[];
}
