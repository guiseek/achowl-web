import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianAuthLayoutComponent } from './musician-auth-layout.component';

describe('MusicianAuthLayoutComponent', () => {
  let component: MusicianAuthLayoutComponent;
  let fixture: ComponentFixture<MusicianAuthLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianAuthLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianAuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
