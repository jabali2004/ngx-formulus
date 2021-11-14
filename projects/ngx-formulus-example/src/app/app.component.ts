import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import type { IDynamicOverride } from 'projects/ngx-formulus/src/public-api';
import { ControlType } from 'projects/ngx-formulus/src/public-api';
import { DynamicForm } from 'projects/ngx-formulus/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'ngx-formulus-example';

  public formGroup: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    disabledControl: new FormControl(''),
    hiddenControl: new FormControl(''),
  });

  public dynamicForm: DynamicForm | null = null;

  ngOnInit(): void {
    const overrides: IDynamicOverride[] = [
      {
        formControlName: 'firstName',
        label: 'First Name:',
        fullWidth: true,
      },
      { formControlName: 'lastName', label: 'Last Name:' },
      {
        formControlName: 'birthDate',
        label: 'Birth Date:',
        type: ControlType.Input,
      },
      {
        formControlName: 'disabledControl',
        label: 'Control (Disabled)',
        type: ControlType.Input,
        hidden: false,
        disabled: true,
      },
      {
        formControlName: 'hiddenControl',
        label: 'Control (Hidden)',
        type: ControlType.Input,
        hidden: true,
        disabled: false,
      },
    ];

    this.dynamicForm = new DynamicForm({
      formGroup: this.formGroup,
      overrides,
      actions: {
        save: true,
        close: true,
        reset: true,
      },
    });

    this.dynamicForm.onClose.subscribe(() => {
      console.log('Close clicked');
    });

    this.dynamicForm.onSave.subscribe(() => {
      console.log('Save clicked');
    });

    this.dynamicForm.onReset.subscribe(() => {
      console.log('Reset clicked');
    });
  }
}
