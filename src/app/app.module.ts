import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { InicioComponent } from './inicio/inicio.component';
import { InformacionComponent } from './informacion/informacion.component';
import { PeliculaclickedService } from './services/peliculaclicked.service';
import { RenderejemploComponent } from './renderejemplo/renderejemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PeliculasComponent,
    InicioComponent,
    InformacionComponent,
    RenderejemploComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PeliculaclickedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
