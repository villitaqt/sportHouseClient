import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMiembrosComponent } from './listar-miembros.component';

describe('ListarMiembrosComponent', () => {
  let component: ListarMiembrosComponent;
  let fixture: ComponentFixture<ListarMiembrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMiembrosComponent]
    });
    fixture = TestBed.createComponent(ListarMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
