import { IndividualComponent } from './pages/individual/individual.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent,
},
{path:"catalogo/:id",redirectTo: 'catalogo/:id/teste', pathMatch: 'full'},
{
  path:"catalogo/:id/:nome",
  component: IndividualComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
