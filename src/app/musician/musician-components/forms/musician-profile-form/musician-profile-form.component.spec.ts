import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianProfileFormComponent } from './musician-profile-form.component';

describe('MusicianProfileFormComponent', () => {
  let component: MusicianProfileFormComponent;
  let fixture: ComponentFixture<MusicianProfileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianProfileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
