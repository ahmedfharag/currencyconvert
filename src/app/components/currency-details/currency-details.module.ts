import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyDetailsRoutingModule } from './currency-details-routing.module';
import { CurrencyDetailsComponent } from './currency-details.component';
import { ExchangerCurrencyModule } from '../exchanger-currency/exchanger-currency.module';
import { HeaderModule } from '../header/header.module';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    CurrencyDetailsComponent
  ],
  imports: [
    CommonModule,
    CurrencyDetailsRoutingModule,
    HeaderModule,
    ExchangerCurrencyModule,
    NgChartsModule
  ]
})
export class CurrencyDetailsModule { }
