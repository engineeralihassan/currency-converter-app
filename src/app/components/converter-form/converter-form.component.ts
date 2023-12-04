import { Component } from '@angular/core';
import { CurrencyService } from 'src/app/currency.service';
@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.css']
})
export class ConverterFormComponent {
  currencies: string[] = [];
  fromCurrency: string = 'USD';
  toCurrency: string = 'PKR';
  amount: number = 1;
  result: number | undefined;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getExchangeRates('USD').subscribe((data) => {
      console.log("The data is");
      this.currencies = Object.keys(data.rates);
    });
  }

  convertCurrency() {
    this.currencyService
      .getExchangeRates(this.fromCurrency)
      .subscribe((data) => {
        console.log("The currencies",data);
        const rate = data.rates[this.toCurrency];
        this.result = this.amount * rate;
      });
  }
   }
