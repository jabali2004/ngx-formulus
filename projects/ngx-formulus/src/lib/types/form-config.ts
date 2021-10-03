import type { FormStyle } from '../enums/form-style';
import type { ControlOverride } from './control-override';

export interface FormConfig {
  formStyle?: FormStyle;
  disableValidation?: boolean;
  controls?: ControlOverride[];
}
