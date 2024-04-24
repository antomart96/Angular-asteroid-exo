import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsteroidsListComponent } from './asteroids-list/asteroids-list.component';
import { AsteroidDetailsComponent } from './asteroid-details/asteroid-details.component';

const routes: Routes = [
  { path: 'asteroids', component: AsteroidsListComponent },
  { path: 'asteroids/:id', component:AsteroidDetailsComponent},
  { path:'', redirectTo:'asteroids', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }