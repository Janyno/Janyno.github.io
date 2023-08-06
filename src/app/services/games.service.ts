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
    {name: 'Dyson Sphere Program', status: 'not_began', playtime: 66.5},
    {name: 'Beyond: Two Souls', status: 'not_began', playtime: 10.5},
    {name: 'Chernobylite', status: 'in_progress', playtime: 14},
    {name: 'God of War', status: 'not_began', playtime: 20.5},
    {name: 'GTA 3', status: 'not_began', playtime: 15},
    {name: 'GTA SA', status: 'not_began', playtime: 30.5},
    {name: 'GTA VC', status: 'not_began', playtime: 18},
    {name: 'Life is Strange 2', status: 'not_began', playtime: 16},
    {name: 'Mad Max', status: 'not_began', playtime: 20},
    {name: 'NieR: Automata', status: 'not_began', playtime: 21},
    {name: 'Quantum Break', status: 'not_began', playtime: 10},
    {name: 'Spyro Trilogy', status: 'not_began', playtime: 17},
    {name: 'Above Snakes', status: 'not_began', playtime: 15},
    {name: 'Yakuza 7', status: 'not_began', playtime: 45.5},
    {name: 'Jurassic World Evolution 2', status: 'not_began', playtime: 7}
  ]

  toRevisit: Game[] = [
    {name: 'Prehistoric Kingdom'},
    {name: 'Scum'},
  ]

  pileOfShame: Game[] = [
    {name: 'Into the Radius'},
    {name: 'VTOL VR'},
    {name: 'Dragon Fist VR Kung Fu'},
    {name: 'Contractors VR'},
    {name: 'Project Zomboid'},
    {name: 'Miss Neko 2'},
    {name: 'HuniePop 2'}
  ]

  getGames() {
    return {toPlay: this.toPlay, toRevisit: this.toRevisit, pileOfShame: this.pileOfShame}
  }
  
  getGameData() {
    return {toPlayAmount: this.toPlay.length, toRevisitAmount: this.toRevisit.length, pileOfShameAmount: this.pileOfShame.length}
  }
}
