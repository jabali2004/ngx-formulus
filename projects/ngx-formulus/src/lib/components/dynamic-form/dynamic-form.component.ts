import type { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import type { IDynamicControl } from '../../interfaces/dynamic-control';
import type { DynamicForm } from '../../classes/dynamic-form';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { FormService } from '../../services/form.service';
import type { IActionOptions } from '../../interfaces/action-options';

@Component({
  selector: 'ngx-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() data: DynamicForm | null = null;

  public formGroup: FormGroup = new FormGroup({});
  public controls: IDynamicControl[] = [];
  public actions: IActionOptions = {};

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    if (this.data) {
      this.formService.setDynamicForm(this.data);
      this.formGroup = this.data.FormGroup;
      this.controls = this.data.Controls;
      this.actions = this.data.Actions;

      this.data.onReload.subscribe(() => {
        if (this.data) {
          this.formGroup = this.data.FormGroup;
          this.controls = this.data.Controls;
          this.actions = this.data.Actions;
        }
      });
    }
  }
}
