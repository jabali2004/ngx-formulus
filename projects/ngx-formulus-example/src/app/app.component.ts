import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlType } from 'projects/ngx-formulus/src/lib/enums/control-type';
import type { DynamicForm } from 'projects/ngx-formulus/src/lib/types/dynamic-form';

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
    this.dynamicForm = {
      formGroup: this.formGroup,
      config: {
        controls: [
          { control: 'firstName', label: 'First Name' },
          { control: 'birthDate', label: 'Birth Date', type: ControlType.Date },
        ],
      },
    };
  }
}
