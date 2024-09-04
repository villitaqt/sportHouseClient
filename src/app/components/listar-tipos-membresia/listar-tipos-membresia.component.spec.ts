import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTiposMembresiaComponent } from './listar-tipos-membresia.component';

describe('ListarTiposMembresiaComponent', () => {
  let component: ListarTiposMembresiaComponent;
  let fixture: ComponentFixture<ListarTiposMembresiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarTiposMembresiaComponent]
    });
    fixture = TestBed.createComponent(ListarTiposMembresiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
