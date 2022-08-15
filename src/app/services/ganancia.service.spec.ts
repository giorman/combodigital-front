import { TestBed } from '@angular/core/testing';

import { GananciaService } from './ganancia.service';

describe('GananciaService', () => {
  let service: GananciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GananciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
