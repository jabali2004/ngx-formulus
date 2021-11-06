import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NebularInputComponent } from './nebular/nebular-input/nebular-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbInputModule } from '@nebular/theme';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [NebularInputComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // Nebular
    NbInputModule,
  ],
})
export class ControlsModule {}
