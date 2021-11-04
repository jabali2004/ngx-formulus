import type { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import type { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ControlType } from '../enums/control-type';
import type { IDynamicControl } from '../interfaces/dynamic-control';
import type { IDynamicForm } from '../interfaces/dynamic-form';
import type { IDynamicOverride } from '../interfaces/dynamic-override';
export class DynamicForm {
  private controls: IDynamicControl[] = [];
  private overrides: IDynamicOverride[] = [];
  private formGroup: FormGroup = new FormGroup({});

  public actions: { save?: boolean; close?: boolean } = {};

  // Event handling
  private onSaveSubject: Subject<void> = new Subject();
  private onCloseSubject: Subject<void> = new Subject();
  private onChangeSubject: Subject<void> = new Subject();

  // Subscriptions
  private formChange: Observable<unknown> | undefined;

  constructor(config: IDynamicForm) {
    this.formGroup = config.formGroup;
    this.overrides = config.overrides || [];
    this.actions = config.actions || {};

    this.mapControls();
    this.initForm();
  }

  public onSave(): Observable<unknown> {
    return this.onSaveSubject.asObservable();
  }

  public onClose(): Observable<unknown> {
    return this.onCloseSubject.asObservable();
  }

  public onChange(): Observable<unknown> {
    return this.onChangeSubject.asObservable();
  }

  public save(): void {
    this.onSaveSubject.next();
  }

  public close(): void {
    this.onCloseSubject.next();
  }

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

  public get FormGroup(): FormGroup {
    return this.formGroup;
  }

  public get Controls(): IDynamicControl[] {
    return this.controls || [];
  }

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
