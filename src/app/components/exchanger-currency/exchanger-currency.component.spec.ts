import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangerCurrencyComponent } from './exchanger-currency.component';

describe('ExchangerCurrencyComponent', () => {
  let component: ExchangerCurrencyComponent;
  let fixture: ComponentFixture<ExchangerCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangerCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangerCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
