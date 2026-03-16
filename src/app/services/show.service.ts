import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoMain } from '../interfaces/infoMain-interface';
import { Episodes } from '../interfaces/episodes.interface';
import { Cast } from '../interfaces/cast.interface';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  url: string;

  constructor(private http: HttpClient) {
  this.url = 'https://api.tvmaze.com/shows/66';
  }

  getInfoMain() {
    return this.http.get<InfoMain>(this.url);
  }

  getEpisodes() {
    return this.http.get<Episodes[]>(`${this.url}/episodes`);
  }

  getCast() {
    return this.http.get<Cast[]>(`${this.url}/cast`);
  }
}
