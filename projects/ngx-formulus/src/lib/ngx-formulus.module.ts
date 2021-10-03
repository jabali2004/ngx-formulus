import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicInputComponent } from './components/dynamic-input/dynamic-input.component';

@NgModule({
  declarations: [DynamicFormComponent, DynamicInputComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  exports: [DynamicFormComponent],
})
export class NgxFormulusModule {}
