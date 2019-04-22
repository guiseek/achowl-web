import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianRepertoireComponent } from './musician-repertoire.component';

describe('MusicianRepertoireComponent', () => {
  let component: MusicianRepertoireComponent;
  let fixture: ComponentFixture<MusicianRepertoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianRepertoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianRepertoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
