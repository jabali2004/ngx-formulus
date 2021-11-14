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

  public actions: { save?: boolean; close?: boolean; reset?: boolean } = {};

  // Event handling
  private onSaveSubject: Subject<void> = new Subject();
  private onCloseSubject: Subject<void> = new Subject();
  private onResetSubject: Subject<void> = new Subject();
  private onChangeSubject: Subject<void> = new Subject();

  // Subscriptions
  private formChange: Observable<unknown> | undefined;

  constructor(config: IDynamicForm) {
    this.formGroup = config.formGroup || new FormGroup({});
    this.overrides = config.overrides || [];
    this.actions = config.actions || {};

    this.mapControls();
    this.initForm();
  }

  /**
   * Get observable for save event
   * @returns Observable
   */
  public get onSave(): Observable<unknown> {
    return this.onSaveSubject.asObservable();
  }

  /**
   * Get observable for close event
   * @returns Observable
   */
  public get onClose(): Observable<unknown> {
    return this.onCloseSubject.asObservable();
  }

  /**
   * Get observable for reset event
   * @returns Observable
   */
  public get onReset(): Observable<unknown> {
    return this.onResetSubject.asObservable();
  }

  /**
   * Get observable for change event
   * @returns Observable
   */
  public onChange(): Observable<unknown> {
    return this.onChangeSubject.asObservable();
  }

  /**
   * Trigger save event
   */
  public save(): void {
    this.onSaveSubject.next();
  }

  /**
   * Trigger close event
   */
  public close(): void {
    this.onCloseSubject.next();
  }

  /**
   * Trigger reset event
   */
  public reset(): void {
    this.onResetSubject.next();
  }

  /**
   * Reload labels
   */
  public reloadLabels(): void {
    // TODO: Implement dynamic reload for labels or accept observable as label
  }

  /**
   * Reload form
   */
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

  /**
   * Clean form / reset
   */
  public cleanForm(): void {
    this.formGroup.reset();
  }

  /**
   * Get FormGroup
   */
  public get FormGroup(): FormGroup {
    return this.formGroup;
  }

  /**
   * Get Controls
   */
  public get Controls(): IDynamicControl[] {
    return this.controls || [];
  }

  /**
   * Init form
   */
  private initForm(): void {
    this.formChange = this.formGroup.valueChanges.pipe(
      tap(() => {
        this.onChangeSubject.next();
      })
    );
  }

  /**
   * Map controls with overrides
   */
  private mapControls(): void {
    const tempControls: IDynamicControl[] = [];

    const formControls = this.formGroup.controls;

    for (const formControlName in formControls) {
      const formControl = formControls[formControlName] as FormControl;

      const newControl: IDynamicControl = {
        formControl,
        formControlName,
        fullWidth: false,
        disabled: false,
        hidden: false,
      };

      const controlOverride = this.overrides.find(
        (x) => x.formControlName === formControlName
      );

      if (controlOverride) {
        newControl.label = controlOverride.label || formControlName;
        newControl.type = controlOverride.type || ControlType.Input;
        newControl.fullWidth = controlOverride.fullWidth || false;
        newControl.disabled = controlOverride.disabled || false;
        newControl.hidden = controlOverride.hidden || false;
      } else {
        newControl.label = formControlName;
        newControl.type = ControlType.Input;
      }

      tempControls.push(newControl);
    }

    this.controls = tempControls;
  }
}
