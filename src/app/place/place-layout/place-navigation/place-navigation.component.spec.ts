import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceNavigationComponent } from './place-navigation.component';

describe('PlaceNavigationComponent', () => {
  let component: PlaceNavigationComponent;
  let fixture: ComponentFixture<PlaceNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
