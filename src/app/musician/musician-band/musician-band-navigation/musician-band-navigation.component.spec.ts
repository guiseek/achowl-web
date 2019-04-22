import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianBandNavigationComponent } from './musician-band-navigation.component';

describe('MusicianBandNavigationComponent', () => {
  let component: MusicianBandNavigationComponent;
  let fixture: ComponentFixture<MusicianBandNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianBandNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianBandNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
