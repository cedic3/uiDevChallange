import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  public getBeers(): Observable<any> {
    return this.http.get("https://api.punkapi.com/v2/beers");
  }
}
