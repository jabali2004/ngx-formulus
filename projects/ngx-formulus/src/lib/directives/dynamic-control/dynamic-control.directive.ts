import type { Type } from '@angular/core';
import { Directive } from '@angular/core';
import type { IDynamicControl } from '../../interfaces/dynamic-control';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import {
  Input,
  Component,
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  Renderer2,
} from '@angular/core';
import type { BaseControlComponent } from '../../components/controls/base-control/base-control.component';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { TemplateService } from '../../services/template/template.service';

@Directive({
  selector: '[ngxDynamicControl]',
})
export class DynamicControlDirective {
  protected componentRef: ComponentRef<BaseControlComponent> | null = null;

  @Input() dynamicControl: IDynamicControl | undefined | null = null;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    private renderer: Renderer2,
    private templateService: TemplateService
  ) {}

  ngOnInit(): void {
    if (this.dynamicControl && this.dynamicControl.type) {
      const component = this.templateService.getComponent(
        this.dynamicControl.type
      ) as Type<unknown>;

      if (component) {
        const factory = this.resolver.resolveComponentFactory(component);
        this.componentRef = this.container.createComponent(
          factory
        ) as ComponentRef<BaseControlComponent>;

        this.componentRef.instance.dynamicControl = this.dynamicControl;
      }
    }
  }
}
