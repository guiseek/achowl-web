import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserProfileComponent } from './card-user-profile.component';

describe('CardUserProfileComponent', () => {
  let component: CardUserProfileComponent;
  let fixture: ComponentFixture<CardUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
