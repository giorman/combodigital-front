import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorSuscripcionesComponent } from './buscador-suscripciones.component';

describe('BuscadorSuscripcionesComponent', () => {
  let component: BuscadorSuscripcionesComponent;
  let fixture: ComponentFixture<BuscadorSuscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorSuscripcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorSuscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
