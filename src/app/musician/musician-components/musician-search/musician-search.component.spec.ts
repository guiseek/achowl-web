import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianSearchComponent } from './musician-search.component';

describe('MusicianSearchComponent', () => {
  let component: MusicianSearchComponent;
  let fixture: ComponentFixture<MusicianSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
