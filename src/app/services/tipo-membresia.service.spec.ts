import { TestBed } from '@angular/core/testing';

import { TipoMembresiaService } from './tipo-membresia.service';

describe('TipoMembresiaService', () => {
  let service: TipoMembresiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoMembresiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
