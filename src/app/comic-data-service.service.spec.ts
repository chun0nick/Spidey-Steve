import { TestBed } from '@angular/core/testing';

import { ComicDataServiceService } from './comic-data-service.service';

describe('ComicDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComicDataServiceService = TestBed.get(ComicDataServiceService);
    expect(service).toBeTruthy();
  });
});
