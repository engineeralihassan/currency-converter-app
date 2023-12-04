
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  // private apiUrl = 'https://open.er-api.com/v6/latest/';

  // constructor(private http: HttpClient) {}

  // getExchangeRates(baseCurrency: string): Observable<any> {
  //   return this.http.get(`${this.apiUrl}${baseCurrency}`);
  // }
  private exchangeRateApiUrl = 'https://open.er-api.com/v6/latest/';
  private countriesApiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  getExchangeRates(baseCurrency: string): Observable<any> {
    return this.http.get(`${this.exchangeRateApiUrl}${baseCurrency}`);
  }

  getCountries(): Observable<any> {
    return this.http.get(this.countriesApiUrl);
  }
}
