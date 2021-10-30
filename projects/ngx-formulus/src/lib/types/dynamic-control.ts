import type { FormControl } from '@angular/forms';
import type { ControlConfig } from './control-config';
import type { ControlDefinition } from './control-definition';

export interface DynamicControl {
  control?: FormControl;
  definition?: ControlDefinition;
  config?: ControlConfig;
}
