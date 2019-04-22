import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianBandComponent } from './musician-band.component';

describe('MusicianBandComponent', () => {
  let component: MusicianBandComponent;
  let fixture: ComponentFixture<MusicianBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
