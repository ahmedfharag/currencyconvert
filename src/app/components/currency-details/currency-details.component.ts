import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss']
})
export class CurrencyDetailsComponent implements OnInit {

  symbols: any = {};
  currency: string = '';
  EUR_data: number[] = [];
  USD_data: number[] = [];
  AED_data: number[] = [];
  EGP_data: number[] = [];
  JPY_data: number[] = [];
  GBP_data: number[] = [];
  CHF_data: number[] = [];
  CAD_data: number[] = [];
  ZAR_data: number[] = [];

  mostPopular: String[] = ['EGP', 'USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AED', 'ZAR'];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: any[] = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Oct', 'Nov', 'Dec'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  
  public barChartData: any[] = [];

  constructor() { }

  ngOnInit() {
    this.justifyChart();
  
  }

  sentSymbols(event: any) {
    this.symbols = event;
  }

  mainCurr(event: any) {
    this.currency = event;
  }

  justifyChart() {

    for (let i = 0; i < 12; i++) {
      const myHeaders = new Headers();
      myHeaders.append("apikey", "uxxLpSknszpFkKg5wN9u5nIPyix0xvvY");
      const requestOptions: any = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };
    
      const month = (+i + 1) < 10 ? '0'+(+i + 1) : (+i + 1) ;

      fetch("https://api.apilayer.com/fixer/2021-01-"+month+"?symbols=EGP%2CUSD%2CEUR%2CJPY%2CGBP%2CCHF%2CCAD%2CAED%2CZAR&base= "+this.currency+" ", requestOptions)
        .then(response => response.text())
        .then(result =>{
          const res = JSON.parse(result);
          const data = res.rates;
          this.EGP_data.push(data.EGP);
          this.USD_data.push(data.USD);
          this.EUR_data.push(data.EUR);
          this.JPY_data.push(data.JPY);
          this.GBP_data.push(data.GBP);
          this.CHF_data.push(data.CHF);
          this.CAD_data.push(data.CAD);
          this.AED_data.push(data.AED);
          this.ZAR_data.push(data.ZAR);

          if (i == 11) {
            this.barChartData = [
              { data:  this.AED_data, label: 'AED' },
              { data:  this.CAD_data, label: 'CAD' },
              { data:  this.EGP_data, label: 'EGP' },
              { data:  this.GBP_data, label: 'GBP' },
              { data:  this.CHF_data, label: 'CHF' },
              { data:  this.ZAR_data, label: 'ZAR' },
            ];

            // console.log(this.barChartData);
          }
         
        })
        .catch(error => console.log('error', error));
      
      }
  }

}
