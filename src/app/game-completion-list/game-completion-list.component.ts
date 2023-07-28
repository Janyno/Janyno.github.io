import { Component } from '@angular/core';
import { Game } from '../model/game';

@Component({
  selector: 'app-game-completion-list',
  templateUrl: './game-completion-list.component.html',
  styleUrls: ['./game-completion-list.component.scss']
})
export class GameCompletionListComponent {
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

  toComplete: Game [] = [
    {name: 'Red Dead Redemption 2', progress: 70, link: 'https://www.powerpyx.com/red-dead-redemption-2-all-animal-locations-zoologist-skin-deep/', link2: 'https://www.powerpyx.com/red-dead-redemption-2-all-exotics-locations/'},
    {name: 'Yakuza 0', progress: 60},
    {name: 'Dying Light 2', progress: 40}
  ]

  statusColorMap: { [status: string]: string } = {
    not_began: 'red',
    in_progress: 'yellow',
    completed: 'green'
  };
}
