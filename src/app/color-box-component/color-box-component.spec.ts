import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBoxComponent } from './color-box-component';

describe('ColorBoxComponent', () => {
  let component: ColorBoxComponent;
  let fixture: ComponentFixture<ColorBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorBoxComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
