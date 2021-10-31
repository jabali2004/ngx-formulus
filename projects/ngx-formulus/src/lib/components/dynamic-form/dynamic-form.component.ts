import type { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import type { IDynamicControl } from '../../types/dynamic-control';
import type { DynamicForm } from '../../types/dynamic-form';

@Component({
  selector: 'ngx-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() data: DynamicForm | null = null;

  public dynamicControls: IDynamicControl[] = [];

  public formGroup: FormGroup = new FormGroup({});
  public formGroups: FormGroup[] = [];

  constructor() {}

  ngOnInit(): void {}

  public get DynamicControls(): IDynamicControl[] {
    return this.data?.Controls || [];
  }
}
