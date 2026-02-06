import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsandoIf2 } from './usando-if-2';

describe('UsandoIf2', () => {
  let component: UsandoIf2;
  let fixture: ComponentFixture<UsandoIf2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsandoIf2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsandoIf2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
