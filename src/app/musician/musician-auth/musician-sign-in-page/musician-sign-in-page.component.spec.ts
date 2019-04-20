import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianSignInPageComponent } from './musician-sign-in-page.component';

describe('MusicianSignInPageComponent', () => {
  let component: MusicianSignInPageComponent;
  let fixture: ComponentFixture<MusicianSignInPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianSignInPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianSignInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
