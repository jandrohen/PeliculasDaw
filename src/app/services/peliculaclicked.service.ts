import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculaclickedService {
peliculas: any;

  constructor() {
    this.peliculas = [];
  }

  peliculaVista(peliculaVista: any){
    this.peliculas.push(peliculaVista);
  }

  verListado(){
    if (this.peliculas.length > 0){
      return this.peliculas;
    }else{
      return false;
    }
  }
}
