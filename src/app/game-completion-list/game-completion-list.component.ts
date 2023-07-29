import { Component } from '@angular/core';
import { Game } from '../model/game';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-game-completion-list',
  templateUrl: './game-completion-list.component.html',
  styleUrls: ['./game-completion-list.component.scss']
})
export class GameCompletionListComponent {
  toPlay: Game[]
  toComplete: Game[]

  constructor(private gamesService: GamesService) {
    const games = this.gamesService.getGames()

    this.toPlay = games.toPlay
    this.toComplete = games.toComplete
  }

  statusColorMap: { [status: string]: string } = {
    not_began: 'red',
    in_progress: 'yellow',
    completed: 'green'
  };
}
