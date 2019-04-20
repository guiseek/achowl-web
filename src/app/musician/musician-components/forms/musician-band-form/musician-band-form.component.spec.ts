import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianBandFormComponent } from './musician-band-form.component';

describe('MusicianBandFormComponent', () => {
  let component: MusicianBandFormComponent;
  let fixture: ComponentFixture<MusicianBandFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianBandFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianBandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
