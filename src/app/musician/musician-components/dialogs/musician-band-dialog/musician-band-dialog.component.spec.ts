import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianBandDialogComponent } from './musician-band-dialog.component';

describe('MusicianBandDialogComponent', () => {
  let component: MusicianBandDialogComponent;
  let fixture: ComponentFixture<MusicianBandDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianBandDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianBandDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
