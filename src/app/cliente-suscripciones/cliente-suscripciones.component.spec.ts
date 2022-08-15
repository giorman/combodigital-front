import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSuscripcionesComponent } from './cliente-suscripciones.component';

describe('ClienteSuscripcionesComponent', () => {
  let component: ClienteSuscripcionesComponent;
  let fixture: ComponentFixture<ClienteSuscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteSuscripcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteSuscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
