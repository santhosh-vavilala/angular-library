import { TestBed, inject } from '@angular/core/testing';

import { SamplelibraryService } from './samplelibrary.service';

describe('SamplelibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SamplelibraryService]
    });
  });

  it('should be created', inject([SamplelibraryService], (service: SamplelibraryService) => {
    expect(service).toBeTruthy();
  }));
});
