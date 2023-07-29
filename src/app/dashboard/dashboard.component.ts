import { Component } from '@angular/core';
import { GamesService } from '../services/games.service';
import { DashboardData } from '../model/dashboardData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  data: DashboardData

  constructor(private gamesService: GamesService) {
    this.data = this.gamesService.getGameData()
  }
}
