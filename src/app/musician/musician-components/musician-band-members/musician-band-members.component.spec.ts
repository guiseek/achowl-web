import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianBandMembersComponent } from './musician-band-members.component';

describe('MusicianBandMembersComponent', () => {
  let component: MusicianBandMembersComponent;
  let fixture: ComponentFixture<MusicianBandMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianBandMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianBandMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
