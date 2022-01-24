import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

const routes: Routes = [
  {path:'', component: InicioComponent, pathMatch: 'full'},
  {path:'listado-peliculas', component: PeliculasComponent},
  {path:'**',redirectTo:'/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
