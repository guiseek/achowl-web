import { TestBed } from '@angular/core/testing';

import { MusicianBandResolverService } from './musician-band-resolver.service';

describe('MusicianBandResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicianBandResolverService = TestBed.get(MusicianBandResolverService);
    expect(service).toBeTruthy();
  });
});
