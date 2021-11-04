import type { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { DynamicCheckboxComponent } from '../../components/controls/dynamic-checkbox/dynamic-checkbox.component';
import { DynamicInputComponent } from '../../components/controls/dynamic-input/dynamic-input.component';
import { ControlType } from '../../enums/control-type';
import type { NgxFormulusConfig } from '../../interfaces/ngx-formulus-config';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  private templates: { [id: string]: unknown } = {};

  public readonly config: NgxFormulusConfig;

  constructor(@Inject(ConfigService) private _config: NgxFormulusConfig) {
    this.config = _config;

    this.setDefaultTemplates();
    this.mapTemplates();

    console.log(this.templates);
  }

  private setDefaultTemplates(): void {
    this.templates['DynamicInputComponent'] = DynamicInputComponent;
    this.templates['DynamicCheckBoxComponent'] = DynamicCheckboxComponent;
  }

  private mapTemplates(): void {
    if (this.config.templates) {
      for (const templateName in this.config.templates) {
        const template = this.config.templates[templateName];
        this.templates[templateName] = template;
      }
    }
  }

  private getInputComponent(): Component {
    return this.templates['DynamicInputComponent'] as Component;
  }

  private getCheckBoxComponent(): Component {
    return this.templates['DynamicCheckBoxComponent'] as Component;
  }

  public getComponent(controlType: ControlType): Component {
    switch (controlType) {
      case ControlType.String || ControlType.Password || ControlType.Number:
        return this.getInputComponent();

      default:
        return this.getInputComponent();
    }
  }

  // TODO: Add template functionality for every component
}
