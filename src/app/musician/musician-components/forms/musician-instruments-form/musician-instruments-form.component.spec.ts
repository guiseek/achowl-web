import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianInstrumentsFormComponent } from './musician-instruments-form.component';

describe('MusicianInstrumentsFormComponent', () => {
  let component: MusicianInstrumentsFormComponent;
  let fixture: ComponentFixture<MusicianInstrumentsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianInstrumentsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianInstrumentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
