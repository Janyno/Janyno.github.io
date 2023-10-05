import { Injectable } from '@angular/core';
import { Anime } from '../model/anime';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>('assets/data/animeData.json')
  }
}
