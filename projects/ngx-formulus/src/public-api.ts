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
export { DynamicInputComponent } from './lib/components/controls/dynamic-input/dynamic-input.component';
export { DynamicRadioComponent } from './lib/components/controls/dynamic-radio/dynamic-radio.component';
export { DynamicSelectComponent } from './lib/components/controls/dynamic-select/dynamic-select.component';
export { DynamicTextComponent } from './lib/components/controls/dynamic-text/dynamic-text.component';

// Interfaces
export { IDynamicControl } from './lib/interfaces/dynamic-control';
export { IDynamicOverride } from './lib/interfaces/dynamic-override';
export { IDynamicForm } from './lib/interfaces/dynamic-form';

// Classes
export { DynamicForm } from './lib/classes/dynamic-form';

// Enums
export { ControlType } from './lib/enums/control-type';
export { FormStyle } from './lib/enums/form-style';
