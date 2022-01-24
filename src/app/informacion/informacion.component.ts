import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  peliculas: Array<any> = [
    {id: '1', name: 'Avatar', director: 'James Cameron'},
    {id: '2', name: 'Titanic', director: 'James Cameron'},
    {id: '3', name: 'Interstellar', director: 'Christopher Nolan'},
  ];
  peliculaId:any;
  peliculaClick:any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(Params =>{
      this.peliculaId = Params['peliculaId']
      this.peliculaClick = this.peliculaBuscador();
    })
  }

  filtroId(pelicula:any){
    return pelicula.id == this;
  }

  peliculaBuscador(){
    return this.peliculas.filter(this.filtroId, this.peliculaId) [0];
  }

}
