import { Component, Input, OnChanges } from '@angular/core';
import { Episodes } from '../../interfaces/episodes.interface';

@Component({
  selector: 'app-list-episodes',
  templateUrl: './list-episodes.component.html',
  styleUrl: './list-episodes.component.scss'
})
export class ListEpisodesComponent implements OnChanges{
  @Input() episodeList: Episodes[];

  selectedSeason: number | 'all' = 'all';
  seasons: number[] = [];

  ngOnChanges() {
    if (this.episodeList?.length > 0) {
      const uniqueSeasons = this.episodeList.map(ep => ep.season);
      this.seasons = Array.from(new Set(uniqueSeasons)).sort((a, b) => a - b);
    }
  }

  filterBySeason(season: number | 'all') {
    this.selectedSeason = season;
  }

  get filteredEpisodes() {
    if (this.selectedSeason === 'all') {
      return this.episodeList;
    }
    return this.episodeList.filter(ep => ep.season === this.selectedSeason);
  }
}
