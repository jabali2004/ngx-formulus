import type { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BaseControlComponent } from './components/controls/base-control/base-control.component';
import { ConfigService } from './services/config/config.service';
import type { NgxFormulusConfig } from './interfaces/ngx-formulus-config';
import { DynamicControlDirective } from './directives/dynamic-control/dynamic-control.directive';
import { InputControlComponent } from './components/controls/input-control/input-control.component';
import { CheckboxControlComponent } from './components/controls/checkbox-control/checkbox-control.component';
import { RadioControlComponent } from './components/controls/radio-control/radio-control.component';
import { SelectControlComponent } from './components/controls/select-control/select-control.component';
import { ToggleControlComponent } from './components/controls/toggle-control/toggle-control.component';
import { SaveButtonComponent } from './components/form-elements/save-button/save-button.component';
import { CloseButtonComponent } from './components/form-elements/close-button/close-button.component';
import { FormControlDirective } from './directives/form-control/form-control.directive';
import { ResetButtonComponent } from './components/form-elements/reset-button/reset-button.component';
import { TextareaControlComponent } from './components/controls/textarea-control/textarea-control.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    BaseControlComponent,
    DynamicControlDirective,
    FormControlDirective,
    InputControlComponent,
    CheckboxControlComponent,
    RadioControlComponent,
    SelectControlComponent,
    ToggleControlComponent,
    SaveButtonComponent,
    CloseButtonComponent,
    ResetButtonComponent,
    TextareaControlComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [DynamicFormComponent, BaseControlComponent],
})
export class NgxFormulusModule {
  static forRoot(
    config?: NgxFormulusConfig
  ): ModuleWithProviders<NgxFormulusModule> {
    return {
      ngModule: NgxFormulusModule,
      providers: [
        {
          provide: ConfigService,
          useValue: config,
        },
      ],
    };
  }
}
