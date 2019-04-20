import { TestBed, async, inject } from '@angular/core/testing';

import { MusicianGuard } from './musician.guard';

describe('MusicianGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicianGuard]
    });
  });

  it('should ...', inject([MusicianGuard], (guard: MusicianGuard) => {
    expect(guard).toBeTruthy();
  }));
});
