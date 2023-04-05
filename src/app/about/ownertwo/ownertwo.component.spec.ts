import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnertwoComponent } from './ownertwo.component';

describe('OwnertwoComponent', () => {
  let component: OwnertwoComponent;
  let fixture: ComponentFixture<OwnertwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnertwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnertwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
