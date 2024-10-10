import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaffeBarComponent } from './caffe-bar.component';

describe('CaffeBarComponent', () => {
  let component: CaffeBarComponent;
  let fixture: ComponentFixture<CaffeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaffeBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaffeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
