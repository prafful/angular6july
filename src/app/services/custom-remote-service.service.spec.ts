import { TestBed, inject } from '@angular/core/testing';

import { CustomRemoteServiceService } from './custom-remote-service.service';

describe('CustomRemoteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomRemoteServiceService]
    });
  });

  it('should be created', inject([CustomRemoteServiceService], (service: CustomRemoteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
