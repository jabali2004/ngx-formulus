import type { Type } from '@angular/core';
import { Component, Directive } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import {
  Input,
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
} from '@angular/core';
import { ControlType } from '../../enums/control-type';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { TemplateService } from '../../services/template/template.service';

@Directive({
  selector: '[ngxFormControl]',
})
export class FormControlDirective {
  protected componentRef: ComponentRef<unknown> | null = null;

  @Input() formControlType: ControlType | undefined | null | string;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    private templateService: TemplateService
  ) {}

  ngOnInit(): void {
    if (this.formControlType) {
      let component: Type<unknown>;

      switch (this.formControlType) {
        case ControlType.SaveButton:
          component = this.templateService.getComponent(
            ControlType.SaveButton
          ) as Type<unknown>;
          break;

        case ControlType.CloseButton:
          component = this.templateService.getComponent(
            ControlType.CloseButton
          ) as Type<unknown>;
          break;

        case ControlType.ResetButton:
          component = this.templateService.getComponent(
            ControlType.ResetButton
          ) as Type<unknown>;
          break;

        default:
          component = Component as Type<unknown>;
          break;
      }

      if (component) {
        const factory = this.resolver.resolveComponentFactory(component);
        this.componentRef = this.container.createComponent(
          factory
        ) as ComponentRef<unknown>;
      }
    }
  }
}
