import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianAlbumTracksComponent } from './musician-album-tracks.component';

describe('MusicianAlbumTracksComponent', () => {
  let component: MusicianAlbumTracksComponent;
  let fixture: ComponentFixture<MusicianAlbumTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianAlbumTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianAlbumTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
