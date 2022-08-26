import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarClienteComponent } from './agregar-editar-cliente.component';

describe('AgregarEditarClienteComponent', () => {
  let component: AgregarEditarClienteComponent;
  let fixture: ComponentFixture<AgregarEditarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEditarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
