import type { ControlType } from '../enums/control-type';

export interface ControlDefinition {
  data?: any;
  type?: ControlType | null;
}
