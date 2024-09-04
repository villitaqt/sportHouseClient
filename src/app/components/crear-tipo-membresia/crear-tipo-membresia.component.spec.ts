import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoMembresiaComponent } from './crear-tipo-membresia.component';

describe('CrearTipoMembresiaComponent', () => {
  let component: CrearTipoMembresiaComponent;
  let fixture: ComponentFixture<CrearTipoMembresiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearTipoMembresiaComponent]
    });
    fixture = TestBed.createComponent(CrearTipoMembresiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
