import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianSearchDialogComponent } from './musician-search-dialog.component';

describe('MusicianSearchDialogComponent', () => {
  let component: MusicianSearchDialogComponent;
  let fixture: ComponentFixture<MusicianSearchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianSearchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
