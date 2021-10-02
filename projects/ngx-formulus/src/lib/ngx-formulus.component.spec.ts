import type { ComponentFixture} from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { NgxFormulusComponent } from './ngx-formulus.component';

describe('NgxFormulusComponent', () => {
  let component: NgxFormulusComponent;
  let fixture: ComponentFixture<NgxFormulusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxFormulusComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFormulusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
