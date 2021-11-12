import type { ControlType } from '../enums/control-type';

export interface IDynamicOverride {
  formControlName?: string;
  label?: string;
  type?: ControlType;
  fullWidth?: boolean;
  disabled?: boolean;
  hidden?: boolean;
}
