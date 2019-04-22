import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianBandAlbumsPageComponent } from './musician-band-albums-page.component';

describe('MusicianBandAlbumsPageComponent', () => {
  let component: MusicianBandAlbumsPageComponent;
  let fixture: ComponentFixture<MusicianBandAlbumsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianBandAlbumsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianBandAlbumsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
