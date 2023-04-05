import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwneroneComponent } from './ownerone.component';

describe('OwneroneComponent', () => {
  let component: OwneroneComponent;
  let fixture: ComponentFixture<OwneroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwneroneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwneroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
