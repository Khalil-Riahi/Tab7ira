import { TestBed } from '@angular/core/testing';

import { PublicbeachService } from './publicbeach.service';

describe('PublicbeachService', () => {
  let service: PublicbeachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicbeachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
