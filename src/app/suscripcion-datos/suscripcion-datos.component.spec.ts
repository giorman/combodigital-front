import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcionDatosComponent } from './suscripcion-datos.component';

describe('SuscripcionDatosComponent', () => {
  let component: SuscripcionDatosComponent;
  let fixture: ComponentFixture<SuscripcionDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscripcionDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscripcionDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
