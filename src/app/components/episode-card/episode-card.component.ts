import { Component, Input } from '@angular/core';
import { Episodes } from '../../interfaces/episodes.interface';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrl: './episode-card.component.scss'
})
export class EpisodeCardComponent {
  @Input() episode: Episodes;
}
