import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GumiServisComponent } from './gumi-servis.component';

describe('GumiServisComponent', () => {
  let component: GumiServisComponent;
  let fixture: ComponentFixture<GumiServisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GumiServisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GumiServisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
