import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdajaDrvaComponent } from './prodaja-drva.component';

describe('ProdajaDrvaComponent', () => {
  let component: ProdajaDrvaComponent;
  let fixture: ComponentFixture<ProdajaDrvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdajaDrvaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdajaDrvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
