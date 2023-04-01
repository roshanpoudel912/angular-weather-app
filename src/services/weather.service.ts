import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(private http: HttpClient) { }

  apiKey = '901114c1b9f712e0706bd9f005a1a380';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  getWeather(city: string) {
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
       
  }

    // /** GET person type by id. Will 404 if id not found */
    // getWeather(city: string): Observable<Weather> {
    //   const url = `${this.personTypesUrl}/${id}`;
    //   return this.http.get<PersonType>(url).pipe(
    //     tap(_ => this.log(`fetched person type id=${id}`)),
    //     catchError(this.handleError<PersonType>(`getPersonType id=${id}`))
    //   );
    // }
}
