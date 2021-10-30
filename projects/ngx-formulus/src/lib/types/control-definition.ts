import type { ControlType } from '../enums/control-type';

export interface ControlDefinition {
  data?: unknown;
  type?: ControlType | null;
}
