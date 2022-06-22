import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exchanger-currency',
  templateUrl: './exchanger-currency.component.html',
  styleUrls: ['./exchanger-currency.component.scss']
})
export class ExchangerCurrencyComponent implements OnInit {

  allCurrencies: String[] = [];
  amount: number = 0;
  from: String = 'EUR';
  to: String = 'USD';
  oneCurrency: number = 1;
  rate: number = 0;
  result: number = 0;
  info = {
    from: 'EUR',
    to: 'USD'
  };

  @Input() mostPopular: String[] = [];
  @Input() details: boolean = false;
  @Output() onMostPopularChanged = new EventEmitter<any>();
  @Output() sentSymbols = new EventEmitter<any>();
  @Output() mainCurr = new EventEmitter<any>();

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {


    fetch("https://api.apilayer.com/fixer/symbols", this.justifyHeader())
    .then(response => response.text())
    .then(result => {
      const symbols = (JSON.parse(result)).symbols;
      this.sentSymbols.emit(symbols);
      this.allCurrencies = Object.keys((JSON.parse(result)).symbols);
    })
    .catch(error => console.log('error', error));

    // IN CASE OF HOME PAGE
    if (!this.details) {
     
      this.convertCurrency(1);
    } else {
      // IN CASE OF PAGE DETAILS
      this.route.queryParams
      .subscribe(params => {
        // console.log(params); 
        this.to = params['to'] ? params['to'] : this.to;
        this.from = params['from'] ? params['from'] : this.from;
        this.amount = params['amount'] ? params['amount'] : this.amount;
        this.info = {
          from: params['from'],
          to: params['to']
        };
        this.mainCurr.emit(this.from);
        this.convertCurrency();
      }
    );
    }

    

    
    }
    
    justifyHeader() {
      const myHeaders = new Headers();
      myHeaders.append("apikey", "uxxLpSknszpFkKg5wN9u5nIPyix0xvvY");
      const requestOptions: any = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders
      };
      return requestOptions;
    }

    convertCurrency(amount = 0) {
      fetch("https://api.apilayer.com/fixer/convert?to="+this.to+"&from="+this.from+"&amount= "+ (amount == 0 ? this.amount : amount) +" ", this.justifyHeader())
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result);
            this.result = data['result'];
            this.rate = data['info']['rate'];
            this.info = {
              from: data['query']['from'],
              to: data['query']['to']
            };
        })
        .catch(error => console.log('error', error));

        this.detectCurrencyChanged();
    }

    detectCurrencyChanged() {
     
      const amount = (this.amount == 0 ? 1 : this.amount);
      const convertedAmout: any[] = [];
      let i = 0;
      for (const key of this.mostPopular) {
        fetch("https://api.apilayer.com/fixer/convert?to="+key+"&from="+this.from+"&amount= "+ (amount == 0 ? this.amount : amount) +" ", this.justifyHeader())
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result);
            convertedAmout.push({
              curr: key,
              value: data['result']
            });
            i++;
            if (i == this.mostPopular.length) {
              this.onMostPopularChanged.emit(convertedAmout);
            }
        })
        .catch(error => console.log('error', error));
      }
    }

    OnChange(event: any) {
      console.log(event);
    }
}
