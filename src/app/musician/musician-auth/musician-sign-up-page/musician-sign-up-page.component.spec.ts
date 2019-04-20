import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianSignUpPageComponent } from './musician-sign-up-page.component';

describe('MusicianSignUpPageComponent', () => {
  let component: MusicianSignUpPageComponent;
  let fixture: ComponentFixture<MusicianSignUpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianSignUpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianSignUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
