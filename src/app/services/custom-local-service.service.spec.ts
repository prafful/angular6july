import { TestBed, inject } from '@angular/core/testing';

import { CustomLocalServiceService } from './custom-local-service.service';

describe('CustomLocalServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomLocalServiceService]
    });
  });

  it('should be created', inject([CustomLocalServiceService], (service: CustomLocalServiceService) => {
    expect(service).toBeTruthy();
  }));
});
