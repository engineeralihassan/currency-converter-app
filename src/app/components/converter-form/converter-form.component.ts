import { Component } from '@angular/core';
import { CurrencyService } from 'src/app/currency.service';
@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.css']
})
export class ConverterFormComponent {
  currencies: string[] = [];
  fromCurrency: string = 'PKR';
  toCurrency: string = 'USD';
  amount: number = 1;
  result: number | undefined;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    // Fetch the list of currencies when the component initializes
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
//   currencies: any[] = [];
//   fromCurrency: any;
//   toCurrency: any;
//   amount: number = 1;
//   result: number | undefined;

//   constructor(private currencyService: CurrencyService) {}

//   ngOnInit(): void {
//     this.currencyService.getCountries().subscribe((data) => {
//       console.log("The currencies are:",data);
//       this.currencies = data
//         .filter((country: any) => country.currencies && country.currencies[0] && country.currencies[0].code)
//         .map((country: any) => {
//           return {
//             code: country.currencies[0].code,
//             name: country.name.common,
//             flag: country.flags[0],
//           };
//         });
//     });
//   }

//   convertCurrency() {
//     this.currencyService
//       .getExchangeRates(this.fromCurrency.code)
//       .subscribe((data) => {
//         const rate = data.rates[this.toCurrency.code];
//         this.result = this.amount * rate;
//       });
//   }
 }
