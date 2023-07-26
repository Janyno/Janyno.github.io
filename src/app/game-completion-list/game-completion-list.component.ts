import { Component } from '@angular/core';
import { Game } from '../model/game';

@Component({
  selector: 'app-game-completion-list',
  templateUrl: './game-completion-list.component.html',
  styleUrls: ['./game-completion-list.component.scss']
})
export class GameCompletionListComponent {
  toPlay: Game[] = [
    {name: 'TRADER LIFE SIMULATOR'},
    {name: 'Chernobylite'}
  ]

  toComplete: Game [] = [
    {name: 'Red Dead Redemption 2', progress: 76, link: 'https://www.ign.com/maps/red-dead-redemption-2/world'},
    {name: 'Yakuza 0', progress: 70}
  ]
}
