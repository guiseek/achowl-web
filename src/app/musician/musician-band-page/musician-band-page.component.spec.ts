import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianBandPageComponent } from './musician-band-page.component';

describe('MusicianBandPageComponent', () => {
  let component: MusicianBandPageComponent;
  let fixture: ComponentFixture<MusicianBandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianBandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianBandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
