import { TestBed } from '@angular/core/testing';

import { NgxFormulusService } from './ngx-formulus.service';

describe('NgxFormulusService', () => {
  let service: NgxFormulusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFormulusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
