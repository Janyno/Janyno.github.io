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
          primary: '#e3bc08',
        },
      };

    colorsBg: any = {
      loving: {
        secondary: 'hotpink'
      },
      space: {
        secondary: '#3a7a8f'
      },
      deserty: {
        secondary: 'yellow'
      }
    }

    gameReleases: GameReleaseEntry[] = [
        {title: 'Starfield', start: new Date('2023-9-01'), color: { ...this.colors.blue }},
        {title: 'Payday 3', start: new Date('2023-9-18'), color: { ...this.colors.blue }},
        {title: 'Forza Motorsport', start: new Date('2023-10-9'), color: { ...this.colors.blue }},
        {title: 'Cities Skylines 2', start: new Date('2023-10-24'), color: { ...this.colors.blue }},
        {title: 'Assassins Creed Mirage', start: new Date('2023-10-5'), color: { ...this.colors.blue }},
        {title: 'The Crew Motorfest', start: new Date('2023-9-14'), color: { ...this.colors.blue }},
        {title: 'The Lords of the Fallen', start: new Date('2023-10-13'), color: { ...this.colors.blue }},
        {title: 'Alan Wake 2', start: new Date('2023-10-27'), color: { ...this.colors.blue }},
        {title: 'Like a Dragon Gaiden', start: new Date('2023-11-9'), color: { ...this.colors.blue }},
        {title: 'Call of Duty: Modern Warfare 3', start: new Date('2023-11-3'), color: { ...this.colors.blue }},
        {title: 'Avatar: Frontiers of Pandora', start: new Date('2023-12-7'), color: { ...this.colors.blue }},
        {title: 'Cyberpunk 2077: Phantom Liberty', start: new Date('2023-9-26'), color: { ...this.colors.blue }},
        {title: 'Streets of Rouge 2', start: new Date('2024-12-31'), color: { ...this.colors.blue }},
        {title: 'Eternights', start: new Date('2023-9-12'), color: { ...this.colors.blue }},
        {title: 'Robocop: Rogue City', start: new Date('2023-9-31'), color: { ...this.colors.blue }},
        {title: 'Star Trucker', start: new Date('2024-12-31'), color: { ...this.colors.blue }}
      ]

    events: EventEntry[] = [
        {title: 'Gamescom Opening Night', start: new Date('2023-8-22'), startTime: '19:30', color: { ...this.colors.yellow }, link: 'https://www.youtube.com/watch?v=eqh-rDzgVwQ'},
        {title: 'PAX West', start: new Date('2023-9-1'), end: new Date('2023-9-4') , startTime: '???', color: { ...this.colors.yellow }, link: 'https://www.twitch.tv/PAX/'},
        {title: 'Game Awards', start: new Date('2023-12-8'), startTime: '???', color: { ...this.colors.yellow }, link: 'https://www.youtube.com/@thegameawards'}
    ]

    schedule: ScheduleEntry[] = [
      {start: new Date(2023, 7, 22, 0, 0), title: 'God of War', end: new Date(2023, 7, 22, 23, 59), allDay: true},
      {start: new Date(2023, 7, 23, 0, 0), title: 'God of War', end: new Date(2023, 7, 23, 23, 59), allDay: true},
      {start: new Date(2023, 7, 24, 10, 0), title: 'Chernobylite', end: new Date(2023, 7, 24, 12, 0), allDay: false},
      {start: new Date(2023, 7, 24, 14, 0), title: 'Outward', end: new Date(2023, 7, 24, 23, 59), allDay: false},
      {start: new Date(2023, 7, 28, 17, 0), title: 'Huniepop 2', end: new Date(2023, 7, 28, 22, 0), allDay: false, color: {...this.colorsBg.loving}},
      {start: new Date(2023, 7, 29, 16, 0), title: 'Mad Max', end: new Date(2023, 7, 29, 22, 0), allDay: false, color: { ...this.colorsBg.deserty}},
      {start: new Date(2023, 7, 30, 18, 30), title: 'Mad Max', end: new Date(2023, 7, 30, 22, 0), allDay: false, color: { ...this.colorsBg.deserty}},
      {start: new Date(2023, 7, 31, 16, 15), title: 'Mad Max', end: new Date(2023, 7, 31, 22, 0), allDay: false, color: { ...this.colorsBg.deserty}},
      {start: new Date(2023, 8, 1, 16, 0), title: 'Starfield', end: new Date(2023, 8, 10, 23, 59), allDay: false, color: {...this.colorsBg.space}}
    ];

    getCalendarList() {
      return this.gameReleases.concat(this.events as any)
    }

    getEvents() {
      return this.getTodayTransform(this.events)
    }

    getReleases() {
      return this.getTodayTransform(this.gameReleases)
    }

    getTodaySchedule(): ScheduleEntry[] {
      return this.getTodayTransform(this.schedule)
    }

    getTodayTransform(untransformedArr: any[]) {
      const today = new Date();

      const todayEntries = untransformedArr.filter(entry =>
        entry.start.getFullYear() === today.getFullYear() &&
        entry.start.getMonth() === today.getMonth() &&
        entry.start.getDate() === today.getDate()
      );

      return todayEntries;
    }
}