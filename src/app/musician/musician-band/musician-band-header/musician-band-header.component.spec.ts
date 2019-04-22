import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianBandHeaderComponent } from './musician-band-header.component';

describe('MusicianBandHeaderComponent', () => {
  let component: MusicianBandHeaderComponent;
  let fixture: ComponentFixture<MusicianBandHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianBandHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianBandHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
