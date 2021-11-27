import { TestBed } from '@angular/core/testing';

import { EstadiasService } from './estadias.service';

describe('EstadiasService', () => {
  let service: EstadiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
