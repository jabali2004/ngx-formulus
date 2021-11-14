import type { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { ControlType } from '../../enums/control-type';
import { ConfigService } from '../config/config.service';
import type { NgxFormulusConfig } from '../../interfaces/ngx-formulus-config';
import { InputControlComponent } from '../../components/controls/input-control/input-control.component';
import { RadioControlComponent } from '../../components/controls/radio-control/radio-control.component';
import { SelectControlComponent } from '../../components/controls/select-control/select-control.component';
import { TextControlComponent } from '../../components/controls/text-control/text-control.component';
import { CheckboxControlComponent } from '../../components/controls/checkbox-control/checkbox-control.component';
import { SaveButtonComponent } from '../../components/form-elements/save-button/save-button.component';
import { CloseButtonComponent } from '../../components/form-elements/close-button/close-button.component';
import { ResetButtonComponent } from '../../components/form-elements/reset-button/reset-button.component';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  private templates: { [id: string]: Component } = {};

  public readonly config: NgxFormulusConfig;

  constructor(@Inject(ConfigService) private _config: NgxFormulusConfig) {
    this.config = _config;

    this.setDefaultTemplates();
    this.mapTemplates();
  }

  /**
   * Get component by ControlType
   * @param controlType
   * @returns Component
   */
  public getComponent(controlType: ControlType): Component {
    return this.getComponentByType(controlType);
  }

  /**
   * Inject component for specific template
   * @param template
   * @param controlType
   */
  public setTemplate(template: Component, controlType: ControlType): void {
    this.templates[controlType] = template;
  }

  /**
   * Get all registered templates
   */
  public get RegisteredTemplates(): { [id: string]: Component } {
    return this.templates;
  }

  // TODO: Add template functionality for every component

  /**
   * Set all default templates for each component
   */
  private setDefaultTemplates(): void {
    // Input
    this.templates[ControlType.Input] = InputControlComponent as Component;
    // Checkbox
    this.templates[ControlType.Checkbox] =
      CheckboxControlComponent as Component;
    // Radio
    this.templates[ControlType.Radio] = RadioControlComponent as Component;
    // Select
    this.templates[ControlType.Select] = SelectControlComponent as Component;
    // Text
    this.templates[ControlType.Text] = TextControlComponent as Component;

    // Form specific components
    this.templates[ControlType.SaveButton] = SaveButtonComponent as Component;
    this.templates[ControlType.CloseButton] = CloseButtonComponent as Component;
    this.templates[ControlType.ResetButton] = ResetButtonComponent as Component;
  }

  /**
   * Map all templates
   */
  private mapTemplates(): void {
    if (this.config && this.config.templates) {
      for (const templateName in this.config.templates) {
        const template = this.config.templates[templateName];
        this.templates[templateName] = template;
      }
    }
  }

  /**
   * Get component by ControlType
   * @param type
   * @returns Component
   */
  private getComponentByType(type: ControlType): Component {
    return this.templates[type] as Component;
  }
}
