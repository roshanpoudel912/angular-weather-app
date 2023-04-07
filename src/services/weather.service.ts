import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, of } from 'rxjs';
import { Weather } from 'src/model/Weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(private http: HttpClient) { }

  apiKey = '901114c1b9f712e0706bd9f005a1a380';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';


    // /** GET person type by id. Will 404 if id not found */
    getWeather(city: string): Observable<Weather> {
      const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
      return this.http.get<Weather>(url).pipe(
        tap(_ => this.log(`fetched weather data`)),
        catchError(this.handleError<Weather>(`getWeather`))
      );
    }
      /** Log a PersonService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
