import { Component } from '@angular/core';
import { GamesService } from '../services/games.service';
import { DashboardData } from '../model/dashboardData';
import { AnimeService } from '../services/anime.service';
import { EventEntry, GameReleaseEntry, ScheduleEntry } from '../model/calendar';
import { CalendarService } from '../services/calendar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  data: DashboardData
  events: EventEntry[]
  releases: GameReleaseEntry[]
  todaySchedule: ScheduleEntry[]

  constructor(private gamesService: GamesService, private animeService: AnimeService, private calendarService: CalendarService) {
    this.data = {gameData: this.gamesService.getGameData(), animeAmount: this.animeService.getAnimeData()}
    this.events = this.calendarService.getEvents()
    this.releases = this.calendarService.getReleases()
    this.todaySchedule = this.calendarService.getTodaySchedule()
  }
}
