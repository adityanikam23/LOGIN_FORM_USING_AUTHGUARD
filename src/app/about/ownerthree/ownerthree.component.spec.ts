import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerthreeComponent } from './ownerthree.component';

describe('OwnerthreeComponent', () => {
  let component: OwnerthreeComponent;
  let fixture: ComponentFixture<OwnerthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerthreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
