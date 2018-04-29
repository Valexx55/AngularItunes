import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { SearchItem, SearchResult, SearchItemReducido } from './searchitem.model';
import { BusquedaInterface, API_ITUNES } from './busqueda.interface';

@Injectable()
export class BusquedaPromiseService implements BusquedaInterface {

  
  constructor(private http: HttpClient) {
  }

  busca (term: string) {
      console.log ("Usando Promise Service");
      let promise : Promise<Object>; // = new Promise((resolve, reject) => {
        
        let apiURL = API_ITUNES+'?term=' + term + '&media=music&limit=20';
        promise = this.http.get(apiURL).toPromise();

      return promise;
  }
}