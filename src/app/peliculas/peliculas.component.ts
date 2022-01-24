import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas: Array<any> = [
    {id: '1', name: 'Avatar', director: 'James Cameron'},
    {id: '2', name: 'Titanic', director: 'James Cameron'},
    {id: '3', name: 'Interstellar', director: 'Christopher Nolan'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
