import { NgModule } from '@angular/core';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicInputComponent } from './components/controls/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './components/controls/dynamic-select/dynamic-select.component';
import { CommonModule } from '@angular/common';
import { DynamicRadioComponent } from './components/controls/dynamic-radio/dynamic-radio.component';
import { DynamicCheckboxComponent } from './components/controls/dynamic-checkbox/dynamic-checkbox.component';
import { DynamicTextComponent } from './components/controls/dynamic-text/dynamic-text.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicInputComponent,
    DynamicSelectComponent,
    DynamicRadioComponent,
    DynamicCheckboxComponent,
    DynamicTextComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [DynamicFormComponent, DynamicInputComponent],
})
export class NgxFormulusModule {}
