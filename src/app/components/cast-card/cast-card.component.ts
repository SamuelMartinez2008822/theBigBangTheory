import { Component, Input } from '@angular/core';
import { Cast } from '../../interfaces/cast.interface';

@Component({
  selector: 'app-cast-card',
  templateUrl: './cast-card.component.html',
  styleUrl: './cast-card.component.scss'
})
export class CastCardComponent {
  @Input() member: Cast;
}
