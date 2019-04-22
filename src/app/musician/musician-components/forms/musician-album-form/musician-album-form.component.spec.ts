import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianAlbumFormComponent } from './musician-album-form.component';

describe('MusicianAlbumFormComponent', () => {
  let component: MusicianAlbumFormComponent;
  let fixture: ComponentFixture<MusicianAlbumFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianAlbumFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianAlbumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
