import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaSuscripcionComponent } from './venta-suscripcion.component';

describe('VentaSuscripcionComponent', () => {
  let component: VentaSuscripcionComponent;
  let fixture: ComponentFixture<VentaSuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaSuscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
