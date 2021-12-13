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
    demoCheckbox: new FormControl(false),
    demoRadio: new FormControl(false),
    demoText: new FormControl(''),
    demoToggle: new FormControl(false),
    demoTime: new FormControl(''),
    demoDate: new FormControl(''),
  });

  public dynamicForm: DynamicForm | null = null;

  public savedValues: [] = [];

  private overrides: IDynamicOverride[] = [
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
    {
      formControlName: 'demoCheckbox',
      label: 'Demo Checkbox:',
      type: ControlType.Checkbox,
      hidden: false,
      disabled: false,
    },
    {
      formControlName: 'demoToggle',
      label: 'Demo Toggle:',
      type: ControlType.Toggle,
      hidden: false,
      disabled: false,
    },
    {
      formControlName: 'demoTime',
      label: 'Demo Time:',
      type: ControlType.Time,
      hidden: false,
      disabled: false,
    },
    {
      formControlName: 'demoDate',
      label: 'Demo Date:',
      type: ControlType.Date,
      hidden: false,
      disabled: false,
    },
    {
      formControlName: 'demoText',
      label: 'Demo Text:',
      type: ControlType.Text,
      hidden: false,
      disabled: false,
    },
    {
      formControlName: 'demoRadio',
      label: 'Demo Radio:',
      type: ControlType.Radio,
      hidden: false,
      disabled: false,
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
    this.formGroup.controls.firstName.setValue('Jabali2004');
    this.dynamicForm?.reloadForm(this.formGroup, this.overrides);
  }
}
