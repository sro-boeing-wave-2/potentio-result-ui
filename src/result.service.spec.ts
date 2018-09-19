import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ResultService } from './result.service';

describe('ResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([ResultService], (service: ResultService) => {
    expect(service).toBeTruthy();
  }));
});
