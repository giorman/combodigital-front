import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSuscripcionesComponent } from './editar-suscripciones.component';

describe('EditarSuscripcionesComponent', () => {
  let component: EditarSuscripcionesComponent;
  let fixture: ComponentFixture<EditarSuscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSuscripcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSuscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
