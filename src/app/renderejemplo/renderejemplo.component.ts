import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-renderejemplo',
  templateUrl: './renderejemplo.component.html',
  styleUrls: ['./renderejemplo.component.css']
})
export class RenderejemploComponent implements OnInit {

  pelis: Array<any>;
  clearElement!: HTMLElement;

  constructor(private ren: Renderer2) {
  this.pelis =  [
      {"id": 1,
        "name": "Cazafantasmas",
        "director": "Jason Reitman"
      },
      {"id": 2,
        "name": "El renacido",
        "director": "Alejandro González Iñárritu"
      },
      {"id": 3,
        "name": "Gravity",
        "director": "Alfonso Cuarón"
      }
    ]
  }

  ngOnInit(): void {
  }

  activeMethod(elemen:HTMLElement){
    if (this.clearElement){
      this.ren.removeClass(this.clearElement,'miclase');
    }
    let nuevoElemento = this.ren.createElement("button");
    this.ren.setProperty(nuevoElemento, "innerHTML", " ✅ ");
    this.ren.appendChild(elemen, nuevoElemento);

   this.ren.setAttribute(elemen, 'data-select', 'true');
   this.ren.addClass(elemen, 'miclase');
    window.alert(elemen.innerText + "COMPRADO");
   this.clearElement = elemen;
   }

  activeMethod3(elemen:HTMLElement) {
    this.ren.addClass(elemen, 'sombras');

  }
  activeMethod4(elemen:HTMLElement){
    this.ren.removeClass(elemen, 'sombras');
  }
}
