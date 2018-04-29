export interface BusquedaInterface {

    busca (termino : string):any;

}

//No nos deja declarar un atributo de un interface con un valor
export const API_ITUNES : string = 'https://itunes.apple.com/search';