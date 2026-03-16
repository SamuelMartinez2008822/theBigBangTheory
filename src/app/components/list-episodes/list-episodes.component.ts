import { Component, Input } from '@angular/core';
import { Episodes } from '../../interfaces/episodes.interface';

@Component({
  selector: 'app-list-episodes',
  templateUrl: './list-episodes.component.html',
  styleUrl: './list-episodes.component.scss'
})
export class ListEpisodesComponent {
  @Input() episodeList: Episodes[];
}
