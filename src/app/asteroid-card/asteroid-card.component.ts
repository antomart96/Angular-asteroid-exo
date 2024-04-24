import { Component, Input } from '@angular/core';
import { asteroid } from '../types/asteroid';

@Component({
  selector: 'app-asteroid-card',
  templateUrl: './asteroid-card.component.html',
  styleUrls: ['./asteroid-card.component.css']
})
export class AsteroidCardComponent {
  @Input() asteroid?:asteroid;

}
