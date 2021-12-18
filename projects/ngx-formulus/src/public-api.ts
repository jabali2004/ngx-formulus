/*
 * Public API Surface of ngx-formulus
 */

//  Modules
export { NgxFormulusModule } from './lib/ngx-formulus.module';

// Services
export { TemplateService } from './lib/services/template/template.service';

// Components
export { DynamicFormComponent } from './lib/components/dynamic-form/dynamic-form.component';
// TODO: Check if export is really needed
export { BaseControlComponent } from './lib/components/controls/base-control/base-control.component';
export { InputControlComponent } from './lib/components/controls/input-control/input-control.component';
export { CheckboxControlComponent } from './lib/components/controls/checkbox-control/checkbox-control.component';
export { RadioControlComponent } from './lib/components/controls/radio-control/radio-control.component';
export { SelectControlComponent } from './lib/components/controls/select-control/select-control.component';
export { ToggleControlComponent } from './lib/components/controls/toggle-control/toggle-control.component';
export { TextareaControlComponent } from './lib/components/controls/textarea-control/textarea-control.component';

export { SaveButtonComponent } from './lib/components/form-elements/save-button/save-button.component';
export { CloseButtonComponent } from './lib/components/form-elements/close-button/close-button.component';
export { ResetButtonComponent } from './lib/components/form-elements/reset-button/reset-button.component';

// Directives
export { DynamicControlDirective } from './lib/directives/dynamic-control/dynamic-control.directive';
export { FormControlDirective } from './lib/directives/form-control/form-control.directive';

// Interfaces
export { IDynamicControl } from './lib/interfaces/dynamic-control';
export { IDynamicOverride } from './lib/interfaces/dynamic-override';
export { IDynamicForm } from './lib/interfaces/dynamic-form';

// Classes
export { DynamicForm } from './lib/classes/dynamic-form';

// Enums
export { ControlType } from './lib/enums/control-type';
export { FormStyle } from './lib/enums/form-style';
