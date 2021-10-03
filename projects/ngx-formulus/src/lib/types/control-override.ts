import type { ControlType } from '../enums/control-type';

export interface ControlOverride {
  control: string;
  type?: ControlType;
  label?: string;
  required?: boolean;
}
