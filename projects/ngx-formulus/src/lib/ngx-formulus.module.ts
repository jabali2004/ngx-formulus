import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicInputComponent } from './components/controls/dynamic-input/dynamic-input.component';

@NgModule({
  declarations: [DynamicFormComponent, DynamicInputComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  exports: [DynamicFormComponent],
})
export class NgxFormulusModule {}
