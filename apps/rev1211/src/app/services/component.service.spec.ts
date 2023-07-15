import { TestBed } from '@angular/core/testing';

import { ConponentService } from './component.service';

describe('ConponentService', () => {
  let service: ConponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
