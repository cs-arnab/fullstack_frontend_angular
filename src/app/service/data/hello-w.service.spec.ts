import { TestBed } from '@angular/core/testing';

import { HelloWService } from './hello-w.service';

describe('HelloWService', () => {
  let service: HelloWService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloWService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
