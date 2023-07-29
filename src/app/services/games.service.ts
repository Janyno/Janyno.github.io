import { Injectable } from '@angular/core';
import { Game } from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

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
    {name: 'Yakuza 7', status: 'not_began'}
  ]

  toComplete: Game[] = [
    {
      name: 'Red Dead Redemption 2', 
      progress: 70, 
      links: [
        'https://www.powerpyx.com/red-dead-redemption-2-all-animal-locations-zoologist-skin-deep/', 
        'https://www.powerpyx.com/red-dead-redemption-2-all-exotics-locations/',
        'https://www.powerpyx.com/red-dead-redemption-2-all-hunting-request-locations/',
        'https://www.ign.com/wikis/red-dead-redemption-2/Treasure_Maps'
    ]
  },
    {
      name: 'Yakuza 0', 
      progress: 60},
    {
      name: 'Dying Light 2', 
      notes: ['City Alignment 7 - Boot Licker Achievement', 'Fit as a Fiddle, Ironheart | 2 Playthroughs all Injectors'], progress: 40,
      links: [
      'https://www.powerpyx.com/dying-light-2-all-memento-locations-collectible-notes/',
      'https://www.powerpyx.com/dying-light-2-all-tape-locations-collectible-recordings/'
    ]}
  ]

  getGames() {
    return {toPlay: this.toPlay, toComplete: this.toComplete}
  }
  
  getGameData() {
    return {toPlayAmount: this.toPlay.length, toCompleteAmount: this.toComplete.length}
  }
}
