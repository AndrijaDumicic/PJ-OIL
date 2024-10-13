import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenzinskaPostajaComponent } from './benzinska-postaja.component';

describe('BenzinskaPostajaComponent', () => {
  let component: BenzinskaPostajaComponent;
  let fixture: ComponentFixture<BenzinskaPostajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenzinskaPostajaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenzinskaPostajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
