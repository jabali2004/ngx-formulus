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
    demoInput: new FormControl(''),
    demoCheckbox: new FormControl(false),
    demoRadio: new FormControl(false),
    demoText: new FormControl(''),
    demoTime: new FormControl(''),
    demoDate: new FormControl(''),
    demoPassword: new FormControl(''),
    demoSelect: new FormControl(null),
    demoTextarea: new FormControl(''),
    demoHiddenPassword: new FormControl(''),
    demoDisabledInput: new FormControl('Disabled Input!'),
    demoDisabledCheckbox: new FormControl(true),
    demoRequiredInput: new FormControl(null, Validators.required),
    demoRequiredEmailInput: new FormControl(null, [
      Validators.required,
      Validators.email,
    ]),
  });

  public dynamicForm: DynamicForm | null = null;

  public savedValues: [] = [];

  private overrides: IDynamicOverride[] = [
    {
      formControlName: 'demoInput',
      label: 'Demo Input',
      type: ControlType.Input,
      hidden: false,
      disabled: false,
      fullWidth: true,
    },
    {
      formControlName: 'demoCheckbox',
      label: 'Demo Checkbox',
      type: ControlType.Checkbox,
      hidden: false,
      disabled: false,
      fullWidth: true,
    },
    {
      formControlName: 'demoRadio',
      label: 'Demo Radio',
      type: ControlType.Radio,
      hidden: false,
      disabled: false,
      fullWidth: true,
    },
    {
      formControlName: 'demoText',
      label: 'Demo Text',
      type: ControlType.Text,
      hidden: false,
      disabled: false,
      fullWidth: true,
    },
    {
      formControlName: 'demoTime',
      label: 'Demo Time',
      type: ControlType.Time,
      hidden: false,
      disabled: false,
      fullWidth: true,
    },
    {
      formControlName: 'demoDate',
      label: 'Demo Date',
      type: ControlType.Date,
      hidden: false,
      disabled: false,
      fullWidth: true,
    },
    {
      formControlName: 'demoPassword',
      label: 'Demo Password',
      type: ControlType.Password,
      hidden: false,
      disabled: false,
      fullWidth: true,
    },
    {
      formControlName: 'demoSelect',
      label: 'Demo Select',
      type: ControlType.Select,
      hidden: false,
      disabled: false,
      fullWidth: true,
      data: [
        {
          value: 'option1',
          label: 'Option 1',
        },
        {
          value: 'option2',
          label: 'Option 2',
        },
        {
          value: 'option3',
          label: 'Option 3',
        },
      ],
    },
    {
      formControlName: 'demoTextarea',
      label: 'Demo Textarea',
      type: ControlType.Textarea,
      hidden: false,
      disabled: false,
      fullWidth: true,
    },
    {
      formControlName: 'demoHiddenPassword',
      label: 'Demo Hidden Password',
      type: ControlType.Password,
      hidden: true,
      disabled: false,
      fullWidth: true,
    },
    {
      formControlName: 'demoDisabledInput',
      label: 'Demo Disabled Input',
      type: ControlType.Input,
      hidden: false,
      disabled: true,
      fullWidth: true,
    },
    {
      formControlName: 'demoDisabledCheckbox',
      label: 'Demo Disabled Checkbox',
      type: ControlType.Checkbox,
      hidden: false,
      disabled: true,
      fullWidth: true,
    },
    {
      formControlName: 'demoRequiredInput',
      label: 'Demo Required Input',
      type: ControlType.Input,
      hidden: false,
      disabled: false,
      fullWidth: true,
    },
    {
      formControlName: 'demoRequiredEmailInput',
      label: 'Demo Required Email Input',
      type: ControlType.Input,
      hidden: false,
      disabled: false,
      fullWidth: true,
    },
  ];

  ngOnInit(): void {
    const overrides: IDynamicOverride[] = this.overrides;

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
      this.savedValues = this.dynamicForm?.FormGroup.value;
      this.dynamicForm?.FormGroup.markAsUntouched();

      console.log(this.savedValues);
    });

    this.dynamicForm.onReset.subscribe(() => {
      console.log('Reset clicked');

      // Reset form to default saved value
      this.dynamicForm?.FormGroup.setValue(this.savedValues);
      this.dynamicForm?.FormGroup.markAsUntouched();
    });
  }

  public addNewControl(): void {
    const newControl: IDynamicOverride = {
      formControlName: 'test',
      label: 'Added Control',
      type: ControlType.Input,
      hidden: false,
      disabled: false,
    } as IDynamicOverride;

    this.formGroup.addControl('test', new FormControl(''));

    this.overrides.push(newControl);

    this.dynamicForm?.cleanForm();
    this.dynamicForm?.reloadForm(this.formGroup, this.overrides);
  }

  public setUsername(): void {
    this.dynamicForm?.cleanForm();
    this.formGroup.controls.demoInput.setValue('Jabali2004');
    this.dynamicForm?.reloadForm(this.formGroup, this.overrides);
  }
}
