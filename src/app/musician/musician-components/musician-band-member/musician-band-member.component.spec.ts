import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianBandMemberComponent } from './musician-band-member.component';

describe('MusicianBandMemberComponent', () => {
  let component: MusicianBandMemberComponent;
  let fixture: ComponentFixture<MusicianBandMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianBandMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianBandMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
