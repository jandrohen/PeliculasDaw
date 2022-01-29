import { Component, OnInit } from '@angular/core';
import {PeliculaclickedService} from "../services/peliculaclicked.service";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(public peliculasVistas:PeliculaclickedService) { }

  ngOnInit(): void {
  }

}
