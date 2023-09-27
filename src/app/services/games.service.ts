import { Injectable } from '@angular/core';
import { Game } from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  toPlay: Game[] = [
    {name: 'Tales of Arise', status: 'not_began', playtime: 40.5},
    {name: 'GTA 3', status: 'not_began', playtime: 15},
    {name: 'GTA SA', status: 'not_began', playtime: 30.5},
    {name: 'GTA VC', status: 'not_began', playtime: 18},
    {name: 'Life is Strange 2', status: 'not_began', playtime: 16},
    {name: 'Spyro Trilogy', status: 'not_began', playtime: 17},
    {name: 'Yakuza 7', status: 'not_began', playtime: 45.5},
    {name: 'Half Life Alyx', status: 'in_progress', playtime: 14},
    {name: 'Into the Radius', status: 'not_began', playtime: -1},
    {name: 'Project Zomboid', status: 'not_began', playtime: 9999},
    {name: 'Labyrinthine', status: 'in_progress', playtime: 5},
    {name: 'Spiderman Remastered', status: 'not_began', playtime: 17}
  ]

  toRevisit: Game[] = [
    {name: 'Dead by Daylight', status: 'in_progress', playtime: 9999},
    {name: 'Hypixel Skyblock', status: 'not_began', playtime: 9999},
    {name: 'Wynncraft', status: 'not_began', playtime: 9999}
  ]

  getGames() {
    return {toPlay: this.toPlay, toRevisit: this.toRevisit}
  }
  
  getGameData() {
    return {toPlayAmount: this.toPlay.length, toRevisitAmount: this.toRevisit.length}
  }
}
