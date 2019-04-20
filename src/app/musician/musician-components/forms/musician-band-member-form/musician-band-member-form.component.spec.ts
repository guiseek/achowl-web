import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianBandMemberFormComponent } from './musician-band-member-form.component';

describe('MusicianBandMemberFormComponent', () => {
  let component: MusicianBandMemberFormComponent;
  let fixture: ComponentFixture<MusicianBandMemberFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianBandMemberFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianBandMemberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
