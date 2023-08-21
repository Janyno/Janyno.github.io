import { Injectable } from "@angular/core";
import { EventEntry, GameReleaseEntry, ScheduleEntry } from "../model/calendar";

@Injectable({
    providedIn: 'root'
  })
export class CalendarService {
    colors: any = {
        red: {
          primary: '#ad2121'
        },
        blue: {
          primary: '#1e90ff'
        },
        yellow: {
          primary: '#e3bc08'
        },
      };

    gameReleases: GameReleaseEntry[] = [
        {title: 'Starfield', start: new Date('2023-9-01'), color: { ...this.colors.blue }},
        {title: 'Payday 3', start: new Date('2023-9-18'), color: { ...this.colors.blue }},
        {title: 'Forza Motorsport', start: new Date('2023-10-9'), color: { ...this.colors.blue }},
        {title: 'Cities Skylines 2', start: new Date('2023-10-24'), color: { ...this.colors.blue }}
    ]

    events: EventEntry[] = [
        {title: 'Gamescom Opening Night', start: new Date('2023-8-22'), startTime: '19:30', color: { ...this.colors.yellow }}
    ]

    schedule: ScheduleEntry[] = [
      {start: new Date(2023, 7, 22, 0, 0), title: 'Test', end: new Date(2023, 7, 22, 23, 59)}
    ];

    getCalendarList() {
        return this.gameReleases.concat(this.events as any)
    }
}