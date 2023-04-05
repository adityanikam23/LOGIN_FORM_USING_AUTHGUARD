import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingusersComponent } from './landingusers.component';

describe('LandingusersComponent', () => {
  let component: LandingusersComponent;
  let fixture: ComponentFixture<LandingusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
