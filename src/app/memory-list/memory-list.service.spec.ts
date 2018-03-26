import { TestBed, inject } from '@angular/core/testing';

import { MemoryListService } from './memory-list.service';

describe('MemoryListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemoryListService]
    });
  });

  it('should be created', inject([MemoryListService], (service: MemoryListService) => {
    expect(service).toBeTruthy();
  }));
});
