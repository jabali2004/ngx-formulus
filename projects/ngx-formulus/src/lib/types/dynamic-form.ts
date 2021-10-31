import type { FormControl, FormGroup } from '@angular/forms';
import { ControlType } from 'ngx-formulus';
import type { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import type { IDynamicControl } from './dynamic-control';
import type { IDynamicOverride } from './dynamic-override';

export class DynamicForm {
  private controls: IDynamicControl[] = [];

  // Event handling
  private onSaveSubject: Subject<void> = new Subject();
  private onCloseSubject: Subject<void> = new Subject();
  private onChangeSubject: Subject<void> = new Subject();

  // Subscriptions
  private formChange: Observable<unknown> | undefined;

  constructor(
    private formGroup: FormGroup,
    private overrides: IDynamicOverride[]
  ) {
    this.mapControls();
    this.initForm();
  }

  public onSave(): void {}
  public onClose(): void {}
  public onChange(): void {}

  public reloadLabels(): void {}

  public reloadForm(
    _formGroup: FormGroup,
    _overrides: IDynamicOverride[]
  ): void {
    if (_formGroup) {
      this.formGroup = _formGroup;
    }

    if (_overrides) {
      this.overrides = _overrides;
    }

    this.mapControls();
    this.initForm();
  }

  public cleanForm(): void {
    this.formGroup.reset();
  }

  public get FormGroup(): FormGroup | null {
    return this.formGroup || null;
  }

  public get Controls(): IDynamicControl[] | null {
    return this.controls || null;
  }

  private close(): void {}
  private save(): void {}

  private initForm(): void {
    this.formChange = this.formGroup.valueChanges.pipe(
      tap(() => {
        this.onChangeSubject.next();
      })
    );
  }

  private mapControls(): void {
    const tempControls: IDynamicControl[] = [];

    const formControls = this.formGroup.controls;

    for (const formControlName in formControls) {
      const formControl = formControls[formControlName] as FormControl;

      const newControl: IDynamicControl = {
        formControl,
        formControlName,
      };

      const controlOverride = this.overrides.find(
        (x) => x.formControlName === formControlName
      );

      if (controlOverride) {
        newControl.label = controlOverride.label || formControlName;
        newControl.type = controlOverride.type || ControlType.String;
      } else {
        newControl.label = formControlName;
        newControl.type = ControlType.String;
      }

      tempControls.push(newControl);
    }

    this.controls = tempControls;
  }
}
