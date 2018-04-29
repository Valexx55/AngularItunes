import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { BusquedaInterface } from './busqueda.interface';
import { BusquedaPromiseService } from './busquedapromise.service';
import { BusquedaObservableService } from './busquedaobservable.service';
import { SearchItem, SearchResult, SearchItemReducido } from './searchitem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: 'BusquedaInterface', useClass: BusquedaPromiseService}]
 // providers: [{provide: 'BusquedaInterface', useClass: BusquedaObservableService}]
})
export class AppComponent {
  //title = 'app';

  private loading: boolean = false;
  private resultados : SearchItemReducido[];

  //@Inject('CoursesServiceInterface') private coursesService:CoursesServiceInterface
  constructor(@Inject('BusquedaInterface') private itunes:BusquedaPromiseService) { 
  //constructor(@Inject('BusquedaInterface') private itunes:BusquedaObservableService) { 
    this.resultados = [];
  }

//ok, representa el cuerpo de la respuesta
  gestionRespuestaOk (ok : any)
  {
    
    let sr: SearchResult = ok as SearchResult;
    sr.results.map(item => 
     {
       let si : SearchItemReducido = item as SearchItemReducido;
       this.resultados.push(si);
       console.log (si);
    });

    this.loading = false;
  }

  gestionRespuestaKo (ko : any)
  {
    console.log ("Error al recibir la respuesta " + ko);
  }

  doSearch(term:string) {
    this.loading = true;
    this.resultados = [];
    this.itunes.busca(term).then
    ( ok => this.gestionRespuestaOk (ok), 
      ko =>this.gestionRespuestaKo (ko) );
  }


  /*doSearch(term:string) {
    this.loading = true;
    this.resultados = [];
    this.itunes.busca(term).subscribe
    ( ok => this.gestionRespuestaOk (ok), 
      ko =>this.gestionRespuestaKo (ko) );
  }*/
}
