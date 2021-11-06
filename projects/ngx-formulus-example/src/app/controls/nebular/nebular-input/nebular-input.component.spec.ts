import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebularInputComponent } from './nebular-input.component';

describe('NebularInputComponent', () => {
  let component: NebularInputComponent;
  let fixture: ComponentFixture<NebularInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebularInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebularInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
