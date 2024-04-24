import { Component } from '@angular/core';
import { AsteroidsServiceService } from '../services/asteroids-service.service';
import { asteroid_response_body } from '../types/asteroid_response_body';
import { asteroid } from '../types/asteroid';

@Component({
  selector: 'app-asteroids-list',
  templateUrl: './asteroids-list.component.html',
  styleUrls: ['./asteroids-list.component.css']
})
export class AsteroidsListComponent {
  constructor(
    private asteroidService: AsteroidsServiceService
  ){}

  asteroidsResponse?: asteroid[];

  getAsteroids(){
    this.asteroidService.getAsteroids().subscribe(asteroid =>this.asteroidsResponse = asteroid.near_earth_objects['2023-09-28'])
  }

  ngOnInit(){
    this.getAsteroids();
  }
}
