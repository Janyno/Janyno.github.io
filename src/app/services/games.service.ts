import { Injectable } from '@angular/core';
import { Game } from '../model/game';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>('/assets/data/gamesData.json')
  }
}
