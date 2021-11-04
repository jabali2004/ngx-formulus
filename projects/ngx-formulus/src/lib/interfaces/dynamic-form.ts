import type { FormGroup } from '@angular/forms';
import type { FormStyle } from '../enums/form-style';
import type { IDynamicOverride } from './dynamic-override';

export interface IDynamicForm {
  formGroup: FormGroup;
  overrides?: IDynamicOverride[];
  design?: FormStyle;
  actions?: {
    save?: boolean;
    close?: boolean;
  };
}
