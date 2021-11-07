import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NebularInputComponent } from './nebular/nebular-input/nebular-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbInputModule } from '@nebular/theme';
import { BrowserModule } from '@angular/platform-browser';
import { NebularSaveButtonComponent } from './nebular/nebular-save-button/nebular-save-button.component';

@NgModule({
  declarations: [NebularInputComponent, NebularSaveButtonComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // Nebular
    NbInputModule,
    NbButtonModule,
  ],
})
export class ControlsModule {}
