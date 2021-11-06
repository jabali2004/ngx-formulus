import type { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { TemplateService } from 'projects/ngx-formulus/src/public-api';
import {
  ControlType,
  NgxFormulusModule,
} from 'projects/ngx-formulus/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import type { NgxFormulusConfig } from 'projects/ngx-formulus/src/lib/interfaces/ngx-formulus-config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NebularInputComponent } from './controls/nebular/nebular-input/nebular-input.component';
import { ControlsModule } from './controls/controls.module';

const formulusConfig: NgxFormulusConfig = {};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFormulusModule.forRoot(formulusConfig),
    NgbModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    ControlsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private templateService: TemplateService) {
    this.templateService.setTemplate(
      NebularInputComponent as Component,
      ControlType.Input
    );
  }
}
