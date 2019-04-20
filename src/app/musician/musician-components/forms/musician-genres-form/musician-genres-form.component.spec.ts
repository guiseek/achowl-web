import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianGenresFormComponent } from './musician-genres-form.component';

describe('MusicianGenresFormComponent', () => {
  let component: MusicianGenresFormComponent;
  let fixture: ComponentFixture<MusicianGenresFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianGenresFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianGenresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
