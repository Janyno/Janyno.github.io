import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { DashboardData } from '../../model/dashboardData';
import { AnimeService } from '../../services/anime.service';
import { EventEntry, GameReleaseEntry, ScheduleEntry } from '../../model/calendar';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: DashboardData = {
    gameData: {
      toPlayAmount: 0,
      toRevisitAmount: 0
    },
    animeAmount: 0
  }
  events: EventEntry[] = []
  releases: GameReleaseEntry[] = []
  todaySchedule: ScheduleEntry[] = []

  constructor(private gamesService: GamesService, private animeService: AnimeService, private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.gamesService.getData().subscribe(gameData => {
      this.data.gameData.toPlayAmount = gameData.toPlay.length
      this.data.gameData.toRevisitAmount = gameData.toRevisit.length
    })

    this.animeService.getData().subscribe(animeData => {
      this.data.animeAmount = animeData.length
    })
    
    this.events = this.calendarService.getEvents()
    this.releases = this.calendarService.getReleases()
    this.todaySchedule = this.calendarService.getTodaySchedule()
  }
}
