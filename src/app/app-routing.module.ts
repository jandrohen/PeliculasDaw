import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import {InformacionComponent} from "./informacion/informacion.component";
import {RenderejemploComponent} from "./renderejemplo/renderejemplo.component";

const routes: Routes = [
  {path:'', component: InicioComponent, pathMatch: 'full'},
  {path:'listado-peliculas', component: PeliculasComponent},
  {path:'informacion/:peliculaId', component: InformacionComponent},
  {path:'informacion', redirectTo: '/'},
  {path:'renderer2', component:RenderejemploComponent},
  {path:'**',redirectTo:'/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
