import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VencidasComponent } from './vencidas.component';

describe('VencidasComponent', () => {
  let component: VencidasComponent;
  let fixture: ComponentFixture<VencidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VencidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VencidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
