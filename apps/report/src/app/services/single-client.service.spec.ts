import { TestBed } from '@angular/core/testing';

import { SingleClientService } from './single-client.service';

describe('SingleClientService', () => {
  let service: SingleClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
