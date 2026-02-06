import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsandoFor } from './usando-for';

describe('UsandoFor', () => {
  let component: UsandoFor;
  let fixture: ComponentFixture<UsandoFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsandoFor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsandoFor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
