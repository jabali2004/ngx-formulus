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
  });

  public dynamicForm: DynamicForm | null = null;

  ngOnInit(): void {
    const overrides: IDynamicOverride[] = [
      { formControlName: 'firstName', label: 'First Name:' },
      { formControlName: 'lastName', label: 'Last Name:' },
      {
        formControlName: 'birthDate',
        label: 'Birth Date:',
        type: ControlType.Date,
      },
    ];

    this.dynamicForm = new DynamicForm(this.formGroup, overrides);
  }
}
