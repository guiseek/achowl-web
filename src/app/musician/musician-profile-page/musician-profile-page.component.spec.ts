import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianProfilePageComponent } from './musician-profile-page.component';

describe('MusicianProfilePageComponent', () => {
  let component: MusicianProfilePageComponent;
  let fixture: ComponentFixture<MusicianProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
