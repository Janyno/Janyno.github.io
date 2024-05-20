import { Component, OnInit } from '@angular/core';
import { Game } from '../../model/game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  toPlay: Game[] = []
  toRevisit: Game[] = []
  gameList: Game[] = []
  wannaPlay: Game[] = []
  highlightedIndex: number | null = null
  sortingDirection: 'asc' | 'desc' = 'asc'
  availableStatuses: string[] = ['not_began', 'in_progress', 'completed', 'wanna_play'];
  selectedFilter: string | null = null;

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gamesService.getData().subscribe(data => {
      this.toPlay = data.toPlay
      this.wannaPlay = data.wantToPlay
      this.toRevisit = data.toRevisit
      this.gameList = data.toPlay
    })

    this.sortToPlay() 
  }

  statusColorMap: { [status: string]: string } = {
    not_began: 'red',
    in_progress: 'yellow',
    completed: 'green',
    wanna_play: 'aqua'
  };

  highlightRandomGame() {
    if (this.toPlay.length > 0) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * this.toPlay.length);
      } while (randomIndex === this.highlightedIndex);
    
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
      case 'wanna_play':
        this.toPlay = this.wannaPlay
        return 'Want to Play';
      default:
        return value;
    }
  }

  getAmountOfStatus(status: string): number {
    let amount: number = 0
    const arr = this.gameList.concat(this.wannaPlay)

    for (let i = 0; i < arr.length; i++) {
      if(arr[i].status === status) {
        amount++
      }
    }

    return amount
  }
}
