import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsteroidsListComponent } from './asteroids-list/asteroids-list.component';
import { AsteroidCardComponent } from './asteroid-card/asteroid-card.component';
import { AsteroidDetailsComponent } from './asteroid-details/asteroid-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AsteroidsListComponent,
    AsteroidCardComponent,
    AsteroidDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
