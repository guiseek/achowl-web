import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianAlbumDialogComponent } from './musician-album-dialog.component';

describe('MusicianAlbumDialogComponent', () => {
  let component: MusicianAlbumDialogComponent;
  let fixture: ComponentFixture<MusicianAlbumDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianAlbumDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianAlbumDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
