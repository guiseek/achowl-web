import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianBandSettingsPageComponent } from './musician-band-settings-page.component';

describe('MusicianBandSettingsPageComponent', () => {
  let component: MusicianBandSettingsPageComponent;
  let fixture: ComponentFixture<MusicianBandSettingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianBandSettingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianBandSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
