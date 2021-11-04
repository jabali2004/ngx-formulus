import { ModuleWithProviders, NgModule } from '@angular/core';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicInputComponent } from './components/controls/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './components/controls/dynamic-select/dynamic-select.component';
import { CommonModule } from '@angular/common';
import { DynamicRadioComponent } from './components/controls/dynamic-radio/dynamic-radio.component';
import { DynamicCheckboxComponent } from './components/controls/dynamic-checkbox/dynamic-checkbox.component';
import { DynamicTextComponent } from './components/controls/dynamic-text/dynamic-text.component';
import { BaseControlComponent } from './components/controls/base-control/base-control.component';
import { ConfigService } from './services/config/config.service';
import { NgxFormulusConfig } from './interfaces/ngx-formulus-config';
import { DynamicControlDirective } from './directives/dynamic-control/dynamic-control.directive';

@NgModule({
  declarations: [
    DynamicFormComponent,
    BaseControlComponent,
    DynamicInputComponent,
    DynamicSelectComponent,
    DynamicRadioComponent,
    DynamicCheckboxComponent,
    DynamicTextComponent,
    DynamicControlDirective,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    DynamicFormComponent,
    DynamicInputComponent,
    DynamicCheckboxComponent,
  ],
})
export class NgxFormulusModule {
  static forRoot(
    config: NgxFormulusConfig
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
