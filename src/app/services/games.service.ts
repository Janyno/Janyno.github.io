import { Injectable } from '@angular/core';
import { Game } from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  toPlay: Game[] = [
    {name: 'TRADER LIFE SIMULATOR', status: 'not_began', playtime: 3.5},
    {name: 'Outward', status: 'not_began', playtime: 33.5},
    {name: 'Tales of Arise', status: 'not_began', playtime: 40.5},
    {name: 'Dyson Sphere Program', status: 'completed', playtime: 66.5},
    {name: 'Beyond: Two Souls', status: 'not_began', playtime: 10.5},
    {name: 'Chernobylite', status: 'in_progress', playtime: 14},
    {name: 'God of War', status: 'not_began', playtime: 20.5},
    {name: 'GTA 3', status: 'not_began', playtime: 15},
    {name: 'GTA SA', status: 'not_began', playtime: 30.5},
    {name: 'GTA VC', status: 'not_began', playtime: 18},
    {name: 'Life is Strange 2', status: 'not_began', playtime: 16},
    {name: 'Mad Max', status: 'not_began', playtime: 20},
    {name: 'NieR: Automata', status: 'not_began', playtime: 21},
    {name: 'Quantum Break', status: 'in_progress', playtime: 10},
    {name: 'Spyro Trilogy', status: 'not_began', playtime: 17},
    {name: 'Above Snakes', status: 'not_began', playtime: 15},
    {name: 'Yakuza 7', status: 'not_began', playtime: 45.5},
    {name: 'Jurassic World Evolution 2', status: 'completed', playtime: 7},
    {name: 'Half Life Alyx', status: 'in_progress', playtime: 14},
    {name: 'Into the Radius', status: 'not_began'},
    {name: 'VTOL VR', status: 'not_began'},
    {name: 'Dragon Fist VR Kung Fu', status: 'not_began'},
    {name: 'Contractors VR', status: 'not_began'},
    {name: 'Project Zomboid', status: 'not_began'},
    {name: 'Miss Neko 1', status: 'completed'},
    {name: 'Miss Neko 2', status: 'not_began'},
    {name: 'HuniePop 2', status: 'not_began'}
  ]

  toRevisit: Game[] = [
    {name: 'Scum'},
    {name: 'Hydroneer'},
    {name: 'Skyrim'},
    {name: 'Surgeon Simulator VR'},
    {name: 'Dead by Daylight'}
  ]

  getGames() {
    return {toPlay: this.toPlay, toRevisit: this.toRevisit}
  }
  
  getGameData() {
    return {toPlayAmount: this.toPlay.length, toRevisitAmount: this.toRevisit.length}
  }
}
