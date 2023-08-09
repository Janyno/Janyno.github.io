import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-game-completion-list',
  templateUrl: './game-completion-list.component.html',
  styleUrls: ['./game-completion-list.component.scss']
})
export class GameCompletionListComponent {
  toPlay: Game[]
  toRevisit: Game[]
  gameList: Game[] = []
  highlightedIndex: number | null = null
  sortingDirection: 'asc' | 'desc' = 'asc'
  availableStatuses: string[] = ['not_began', 'in_progress', 'completed'];
  selectedFilter: string | null = null;

  constructor(private gamesService: GamesService) {
    const games = this.gamesService.getGames()

    this.toPlay = games.toPlay
    this.toRevisit = games.toRevisit
    this.gameList = this.toPlay
  }

  statusColorMap: { [status: string]: string } = {
    not_began: 'red',
    in_progress: 'yellow',
    completed: 'green'
  };

  highlightRandomGame() {
    if (this.toPlay.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.toPlay.length);

      this.highlightedIndex = randomIndex;
    }
  }

  toggleSortingDirection() {
    this.highlightedIndex = null
    this.sortingDirection = this.sortingDirection === 'asc' ? 'desc' : 'asc';
    this.sortToPlay();
  }

  sortToPlay() {
    this.toPlay.sort((a, b) => {
      const playtimeA = a.playtime ?? 0;
      const playtimeB = b.playtime ?? 0;
  
      if (this.sortingDirection === 'asc') {
        return playtimeA - playtimeB;
      } else {
        return playtimeB - playtimeA;
      }
    });
  }
  

  filterGamesByStatus() {
    this.highlightedIndex = null
    if (!this.selectedFilter) {
      this.toPlay = [...this.gameList];
    } else {
      this.toPlay = this.gameList.filter((game) => game.status === this.selectedFilter);
      this.selectedFilter = this.transformStatus(this.selectedFilter)
    }
    this.sortToPlay();
  }

  transformStatus(value: string): string {
    switch (value) {
      case 'not_began':
        return 'Not Began';
      case 'in_progress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      default:
        return value;
    }
  }

  getAmountOfStatus(status: string): number {
    let amount: number = 0

    for (let i = 0; i < this.gameList.length; i++) {
      if(this.gameList[i].status === status) {
        amount++
      }
    }

    return amount
  }
}
