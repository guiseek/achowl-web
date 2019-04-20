import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianNavigationComponent } from './musician-navigation.component';

describe('MusicianNavigationComponent', () => {
  let component: MusicianNavigationComponent;
  let fixture: ComponentFixture<MusicianNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
