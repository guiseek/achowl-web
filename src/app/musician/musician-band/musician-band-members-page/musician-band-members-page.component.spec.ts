import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianBandMembersPageComponent } from './musician-band-members-page.component';

describe('MusicianBandMembersPageComponent', () => {
  let component: MusicianBandMembersPageComponent;
  let fixture: ComponentFixture<MusicianBandMembersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianBandMembersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianBandMembersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
