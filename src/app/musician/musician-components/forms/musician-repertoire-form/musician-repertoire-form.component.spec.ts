import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianRepertoireFormComponent } from './musician-repertoire-form.component';

describe('MusicianRepertoireFormComponent', () => {
  let component: MusicianRepertoireFormComponent;
  let fixture: ComponentFixture<MusicianRepertoireFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianRepertoireFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianRepertoireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
