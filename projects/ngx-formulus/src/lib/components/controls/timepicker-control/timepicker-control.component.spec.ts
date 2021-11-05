import type { ComponentFixture} from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { TimepickerControlComponent } from './timepicker-control.component';

describe('TimepickerControlComponent', () => {
  let component: TimepickerControlComponent;
  let fixture: ComponentFixture<TimepickerControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimepickerControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepickerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
