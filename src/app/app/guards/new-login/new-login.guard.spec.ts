import { TestBed, async, inject } from '@angular/core/testing';

import { NewLoginGuard } from './new-login.guard';

describe('NewLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewLoginGuard]
    });
  });

  it('should ...', inject([NewLoginGuard], (guard: NewLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
