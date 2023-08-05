import { Injectable } from '@angular/core';
import { Game } from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  toPlay: Game[] = [
    {name: 'TRADER LIFE SIMULATOR', status: 'not_began'},
    {name: 'Outward', status: 'not_began'},
    {name: 'Tales of Arise', status: 'not_began'},
    {name: 'Dyson Sphere Program', status: 'not_began'},
    {name: 'Beyond: Two Souls', status: 'not_began'},
    {name: 'Chernobylite', status: 'not_began'},
    {name: 'God of War', status: 'not_began'},
    {name: 'GTA 3', status: 'not_began'},
    {name: 'GTA SA', status: 'not_began'},
    {name: 'GTA VC', status: 'not_began'},
    {name: 'Life is Strange 2', status: 'not_began'},
    {name: 'Mad Max', status: 'not_began'},
    {name: 'NieR: Automata', status: 'not_began'},
    {name: 'Quantum Break', status: 'not_began'},
    {name: 'Spyro Trilogy', status: 'not_began'},
    {name: 'Above Snakes', status: 'not_began'},
    {name: 'Yakuza 7', status: 'not_began'},
    {name: 'Jurassic Park Evolution 2', status: 'not_began'}
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
    {name: 'Hunie Pop 2'}
  ]

  getGames() {
    return {toPlay: this.toPlay, toRevisit: this.toRevisit, pileOfShame: this.pileOfShame}
  }
  
  getGameData() {
    return {toPlayAmount: this.toPlay.length, toRevisitAmount: this.toRevisit.length, pileOfShameAmount: this.pileOfShame.length}
  }
}
