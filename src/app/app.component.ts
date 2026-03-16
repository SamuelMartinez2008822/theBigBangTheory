import { Component, OnDestroy, OnInit } from '@angular/core';
import { Episodes } from './interfaces/episodes.interface';
import { InfoMain } from './interfaces/infoMain-interface';
import { Cast } from './interfaces/cast.interface';
import { map, Subscription } from 'rxjs';
import { ShowService } from './services/show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{
	episodes: Episodes[] = [];
  showInfo: InfoMain;
  showCast: Cast[] = [];

	private subscription: Subscription;

	constructor(private showService: ShowService) {}
  
  
	ngOnInit(): void {
    
    this.showService.getInfoMain()
    .subscribe (data => this.showInfo = data);  

    this.subscription = this.showService
      .getEpisodes()
      .pipe(
        map((episodes) => {
          return episodes.map((episode) => {
            return {
              url: episode.url,
			        name: episode.name,
			        season: episode.season,
			        number: episode.number,
			        image: episode.image,
			        summary: episode.summary,
            };
          });
        }),
      )
      .subscribe({
        next: (data) => {
          this.episodes = data;
          console.log('Si cargó');
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('Proceso completado');
        },
      });

    this.showService.getCast()
    .subscribe(data => this.showCast = data);
  }

  ngOnDestroy(): void {
	this.subscription.unsubscribe();
  }
}

