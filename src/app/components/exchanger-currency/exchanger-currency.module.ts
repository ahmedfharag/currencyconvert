import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangerCurrencyComponent } from './exchanger-currency.component';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    ExchangerCurrencyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ExchangerCurrencyComponent
  ]
})
export class ExchangerCurrencyModule { }
