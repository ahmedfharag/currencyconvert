import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class exchangerService {

  constructor(private http: HttpClient) { 
    
  }

  getAllCurrencies() {
   // return this.http.get("https://data.fixer.io/api/symbols?access_key='7urgwvMRuDEKQXP3ZtiCPy2lDO1O4n57'");

    const myHeaders = new Headers();
    myHeaders.append("apikey", "7urgwvMRuDEKQXP3ZtiCPy2lDO1O4n57");
    const requestOptions: any = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

}
