import { Component } from '@angular/core';
import { GamesService } from '../services/games.service';
import { DashboardData } from '../model/dashboardData';
import { AnimeService } from '../services/anime.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  data: DashboardData

  constructor(private gamesService: GamesService, private animeService: AnimeService) {
    this.data = {gameData: this.gamesService.getGameData(), animeAmount: this.animeService.getAnimeData()}
  }
}
