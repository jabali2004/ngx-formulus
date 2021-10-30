import type { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import type { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import type { DynamicControl } from '../../types/dynamic-control';
import type { DynamicForm } from '../../types/dynamic-form';

@Component({
  selector: 'ngx-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() data: DynamicForm | null = null;

  public dynamicControls: DynamicControl[] = [];

  public formGroup: FormGroup = new FormGroup({});
  public formGroups: FormGroup[] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.data?.formGroup) {
      this.formGroup = this.data.formGroup;
    }

    const tempDynamicControls: DynamicControl[] = [];

    // if (this.data?.dynamicControls && this.data.dynamicControls.length > 0) {
    // }

    if (this.data?.formGroup) {
      const formControls = this.data.formGroup.controls;
      const controls = this.data.config?.controls;

      for (const controlKey in formControls) {
        const control = controls?.find((x) => x.control === controlKey);

        tempDynamicControls.push({
          control: formControls[controlKey] as FormControl,
          config: {
            key: controlKey,
            label: control?.label || null,
          },
          definition: {
            type: control?.type || null,
          },
        });
      }
    }

    this.dynamicControls = tempDynamicControls;
  }

  public get DynamicControls(): DynamicControl[] {
    return this.dynamicControls;
  }
}
