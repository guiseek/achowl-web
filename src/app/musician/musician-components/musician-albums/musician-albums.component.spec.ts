import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianAlbumsComponent } from './musician-albums.component';

describe('MusicianAlbumsComponent', () => {
  let component: MusicianAlbumsComponent;
  let fixture: ComponentFixture<MusicianAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
