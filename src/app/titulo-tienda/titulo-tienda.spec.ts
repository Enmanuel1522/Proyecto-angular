import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloTienda } from './titulo-tienda';

describe('TituloTienda', () => {
  let component: TituloTienda;
  let fixture: ComponentFixture<TituloTienda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloTienda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloTienda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
