import { TestBed } from '@angular/core/testing';

import { TerapeuticsNotificationService } from './terapeutics-notification.service';

describe('TerapeuticsNotificationService', () => {
  let service: TerapeuticsNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerapeuticsNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
