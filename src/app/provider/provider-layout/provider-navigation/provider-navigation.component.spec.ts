import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderNavigationComponent } from './provider-navigation.component';

describe('ProviderNavigationComponent', () => {
  let component: ProviderNavigationComponent;
  let fixture: ComponentFixture<ProviderNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
