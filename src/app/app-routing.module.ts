import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioLibriComponent } from './dettaglio-libri/dettaglio-libri.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListaLibriComponent } from './lista-libri/lista-libri.component';

const routes: Routes = [
  { path: "dettaglio/:id", component: DettaglioLibriComponent },
  { path: "", component: HomePageComponent },
  { path: "view/books", component: ListaLibriComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
