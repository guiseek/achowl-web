import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianBandMemberCardFormComponent } from './musician-band-member-card-form.component';

describe('MusicianBandMemberCardFormComponent', () => {
  let component: MusicianBandMemberCardFormComponent;
  let fixture: ComponentFixture<MusicianBandMemberCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianBandMemberCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianBandMemberCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
