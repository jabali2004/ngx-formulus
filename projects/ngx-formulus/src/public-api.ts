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
// export { BaseControlComponent } from './lib/components/controls/base-control/base-control.component';
export { InputControlComponent } from './lib/components/controls/input-control/input-control.component';
export { CheckboxControlComponent } from './lib/components/controls/checkbox-control/checkbox-control.component';
export { DatepickerControlComponent } from './lib/components/controls/datepicker-control/datepicker-control.component';
export { RadioControlComponent } from './lib/components/controls/radio-control/radio-control.component';
export { SelectControlComponent } from './lib/components/controls/select-control/select-control.component';
export { TextControlComponent } from './lib/components/controls/text-control/text-control.component';
export { TimepickerControlComponent } from './lib/components/controls/timepicker-control/timepicker-control.component';
export { ToggleControlComponent } from './lib/components/controls/toggle-control/toggle-control.component';

// Directives
export { DynamicControlDirective } from './lib/directives/dynamic-control/dynamic-control.directive';

// Interfaces
export { IDynamicControl } from './lib/interfaces/dynamic-control';
export { IDynamicOverride } from './lib/interfaces/dynamic-override';
export { IDynamicForm } from './lib/interfaces/dynamic-form';

// Classes
export { DynamicForm } from './lib/classes/dynamic-form';

// Enums
export { ControlType } from './lib/enums/control-type';
export { FormStyle } from './lib/enums/form-style';
