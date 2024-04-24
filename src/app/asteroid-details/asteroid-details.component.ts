import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AsteroidsServiceService } from '../services/asteroids-service.service';
import { asteroid } from '../types/asteroid';

@Component({
  selector: 'app-asteroid-details',
  templateUrl: './asteroid-details.component.html',
  styleUrls: ['./asteroid-details.component.css']
})
export class AsteroidDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private asteroidService: AsteroidsServiceService,
  ){}
  id?:number;
  asteroid?:asteroid;
  ngOnInit(){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.asteroidService.getAsteroidById(this.id).subscribe(asteroid => this.asteroid = asteroid)
  }
  goBack(){
    this.location.back();
  }
}
