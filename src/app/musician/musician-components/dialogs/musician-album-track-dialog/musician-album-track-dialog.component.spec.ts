import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianAlbumTrackDialogComponent } from './musician-album-track-dialog.component';

describe('MusicianAlbumTrackDialogComponent', () => {
  let component: MusicianAlbumTrackDialogComponent;
  let fixture: ComponentFixture<MusicianAlbumTrackDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianAlbumTrackDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianAlbumTrackDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
