import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mostPopular: String[] = ['EGP', 'USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AED', 'ZAR'];
  convertedAmout: any = [];

  constructor() { }

  ngOnInit() {
  }

  onMostPopularChanged(event: any) {
    this.convertedAmout = event;
  }

  trackByIndex = (index: number): number => {
    return index;
  };

}
