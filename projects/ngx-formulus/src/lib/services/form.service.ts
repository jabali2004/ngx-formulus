import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import type { DynamicForm } from '../classes/dynamic-form';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private dynamicForm: DynamicForm | null = null;
  private dynamicFormSubject: Subject<void> = new Subject();

  constructor() {}

  public setDynamicForm(_dynamicForm: DynamicForm): void {
    this.dynamicForm = _dynamicForm;
    this.dynamicFormSubject.next();
  }

  public get DynamicForm(): DynamicForm | null {
    return this.dynamicForm;
  }

  public get onDynamicForm(): Observable<unknown> {
    return this.dynamicFormSubject.asObservable();
  }
}
