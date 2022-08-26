import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GananciasComponent } from './ganancias.component';

describe('GananciasComponent', () => {
  let component: GananciasComponent;
  let fixture: ComponentFixture<GananciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GananciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GananciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
