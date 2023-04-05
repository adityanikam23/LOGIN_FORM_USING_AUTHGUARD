import { TestBed } from '@angular/core/testing';

import { AuthoneGuard } from './authone.guard';

describe('AuthoneGuard', () => {
  let guard: AuthoneGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthoneGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
