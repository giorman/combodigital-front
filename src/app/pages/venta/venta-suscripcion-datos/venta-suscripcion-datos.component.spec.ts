import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaSuscripcionDatosComponent } from './venta-suscripcion-datos.component';

describe('VentaSuscripcionDatosComponent', () => {
  let component: VentaSuscripcionDatosComponent;
  let fixture: ComponentFixture<VentaSuscripcionDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaSuscripcionDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaSuscripcionDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
