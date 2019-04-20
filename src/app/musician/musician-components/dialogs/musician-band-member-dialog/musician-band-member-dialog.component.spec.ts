import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianBandMemberDialogComponent } from './musician-band-member-dialog.component';

describe('MusicianBandMemberDialogComponent', () => {
  let component: MusicianBandMemberDialogComponent;
  let fixture: ComponentFixture<MusicianBandMemberDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianBandMemberDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianBandMemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
