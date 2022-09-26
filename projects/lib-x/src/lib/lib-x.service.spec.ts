import { TestBed } from '@angular/core/testing';

import { LibXService } from './lib-x.service';

describe('LibXService', () => {
  let service: LibXService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibXService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
