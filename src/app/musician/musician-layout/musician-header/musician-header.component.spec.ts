import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianHeaderComponent } from './musician-header.component';

describe('MusicianHeaderComponent', () => {
  let component: MusicianHeaderComponent;
  let fixture: ComponentFixture<MusicianHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
