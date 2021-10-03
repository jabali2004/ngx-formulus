import type { FormControl } from '@angular/forms';
import { ControlConfig } from './control-config';
import { ControlDefinition } from './control-definition';

export interface DynamicControl {
  control?: FormControl;
  definition?: ControlDefinition;
  config?: ControlConfig;
}
