import { TestBed } from '@angular/core/testing';

import { AuththreeGuard } from './auththree.guard';

describe('AuththreeGuard', () => {
  let guard: AuththreeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuththreeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
