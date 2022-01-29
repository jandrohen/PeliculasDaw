import { Component, OnInit } from '@angular/core';
import {PeliculaclickedService} from "../services/peliculaclicked.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas!: any;
  errorHttp!: boolean;
  constructor(private http: HttpClient, public peliculaclicked: PeliculaclickedService) {
  }

  ngOnInit(): void {
    this.cargaLista();
  }

  cargaLista(){
    this.http.get('./assets/lista-peliculas.json').subscribe(
      data => { this.peliculas = data;},
      error => { this.errorHttp = true;}
    );
  }

  agregarPelicula(_peliculaVista: any){
    this.peliculaclicked.peliculaVista(_peliculaVista);
  }

}
