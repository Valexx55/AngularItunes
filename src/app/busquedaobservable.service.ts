import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { SearchItem, SearchResult, SearchItemReducido } from './searchitem.model';
import { BusquedaInterface, API_ITUNES } from './busqueda.interface';

@Injectable()
export class BusquedaObservableService implements BusquedaInterface{

  constructor(private http: HttpClient) {
  }
/**
 * @param term Representa el término de búsqueda
 */
  busca (term: string) {
      console.log ("Usando Observable Service");
      let observable : Observable<Object>; // = new Promise((resolve, reject) => {
        
        let apiURL = API_ITUNES+'?term=' + term + '&media=music&limit=20';
        observable = this.http.get(apiURL);

      return observable;
  }
}