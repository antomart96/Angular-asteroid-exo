import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'; 
import { asteroid_response_body } from '../types/asteroid_response_body';
import { asteroid } from '../types/asteroid';

@Injectable({
  providedIn: 'root'
})
export class AsteroidsServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getAsteroids():Observable<asteroid_response_body>{
    const asteroidsUrl = 'https://api.nasa.gov/neo/rest/v1/feed?';
    const startDate = 'start_date=2023-09-28';
    const endDate='end_date=2023-09-28';
    const apiKey='api_key=w8fN0l7o2TdR3TMYdNY2HUTkpPivr04EbE062Duk'

    const url = asteroidsUrl + startDate + '&' + endDate + '&' + apiKey;

    return this.http.get<asteroid_response_body>(url);

  }
  getAsteroidById(id:number):Observable<asteroid>{
    const asteroidUrl = "https://api.nasa.gov/neo/rest/v1/neo/"
    const apiKey='api_key=w8fN0l7o2TdR3TMYdNY2HUTkpPivr04EbE062Duk'

    const url = asteroidUrl + id + '?' + apiKey;

    return this.http.get<asteroid>(url);
  }
}

