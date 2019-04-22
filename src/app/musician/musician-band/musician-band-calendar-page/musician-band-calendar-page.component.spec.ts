import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianBandCalendarPageComponent } from './musician-band-calendar-page.component';

describe('MusicianBandCalendarPageComponent', () => {
  let component: MusicianBandCalendarPageComponent;
  let fixture: ComponentFixture<MusicianBandCalendarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianBandCalendarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianBandCalendarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
