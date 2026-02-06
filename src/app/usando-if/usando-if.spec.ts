import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsandoIf } from './usando-if';

describe('UsandoIf', () => {
  let component: UsandoIf;
  let fixture: ComponentFixture<UsandoIf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsandoIf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsandoIf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
