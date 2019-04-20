import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianProfileDialogComponent } from './musician-profile-dialog.component';

describe('MusicianProfileDialogComponent', () => {
  let component: MusicianProfileDialogComponent;
  let fixture: ComponentFixture<MusicianProfileDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianProfileDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
