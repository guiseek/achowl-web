import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianBandRepertoirePageComponent } from './musician-band-repertoire-page.component';

describe('MusicianBandRepertoirePageComponent', () => {
  let component: MusicianBandRepertoirePageComponent;
  let fixture: ComponentFixture<MusicianBandRepertoirePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianBandRepertoirePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianBandRepertoirePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
