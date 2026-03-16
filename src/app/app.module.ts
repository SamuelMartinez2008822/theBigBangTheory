import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EpisodeCardComponent } from './components/episode-card/episode-card.component';
import { ListCastComponent } from './components/list-cast/list-cast.component';
import { InfoMainComponent } from './components/info-main/info-main.component';
import { CastCardComponent } from './components/cast-card/cast-card.component';
import { ListEpisodesComponent } from './components/list-episodes/list-episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeCardComponent,
    ListCastComponent,
    InfoMainComponent,
    CastCardComponent,
    ListEpisodesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
