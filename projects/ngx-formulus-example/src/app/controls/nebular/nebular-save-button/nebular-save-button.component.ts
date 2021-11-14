import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { FormService } from 'projects/ngx-formulus/src/lib/services/form.service';
import type { DynamicForm } from 'projects/ngx-formulus/src/public-api';

@Component({
  selector: 'app-nebular-save-button',
  templateUrl: './nebular-save-button.component.html',
  styleUrls: ['./nebular-save-button.component.scss'],
})
export class NebularSaveButtonComponent implements OnInit {
  public dynamicForm: DynamicForm | null = null;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.dynamicForm = this.formService.DynamicForm;
    this.formService.onDynamicForm.subscribe(() => {
      this.dynamicForm = this.formService.DynamicForm;
    });
  }

  public checkFormState(): boolean {
    console.log(this.dynamicForm);
    if (this.dynamicForm && this.dynamicForm.FormGroup) {
      const touched = this.dynamicForm.FormGroup.touched;
      const valid = this.dynamicForm.FormGroup.valid;

      if (touched && valid) {
        return false;
      }
    }

    return true;
  }
}
