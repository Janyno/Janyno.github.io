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
      },
      greenish: {
        secondary: '#28b99d'
      },
      purply: {
        secondary: '#a93da9'
      }
    }

    gameReleases: GameReleaseEntry[] = [
        {title: 'Starfield', start: new Date('2023-9-01'), color: { ...this.colors.blue }},
        {title: 'Payday 3', start: new Date('2023-9-18'), color: { ...this.colors.blue }},
        {title: 'Forza Motorsport', start: new Date('2023-10-9'), color: { ...this.colors.blue }},
        {title: 'Cities Skylines 2', start: new Date('2023-10-24'), color: { ...this.colors.blue }},
        {title: 'Assassins Creed Mirage', start: new Date('2023-10-5'), color: { ...this.colors.blue }},
        {title: 'The Crew Motorfest', start: new Date('2023-9-14'), color: { ...this.colors.blue }},
        {title: 'Alan Wake 2', start: new Date('2023-10-27'), color: { ...this.colors.blue }},
        {title: 'Like a Dragon Gaiden', start: new Date('2023-11-9'), color: { ...this.colors.blue }},
        {title: 'Call of Duty: Modern Warfare 3', start: new Date('2023-11-3'), color: { ...this.colors.blue }},
        {title: 'Avatar: Frontiers of Pandora', start: new Date('2023-12-7'), color: { ...this.colors.blue }},
        {title: 'Cyberpunk 2077: Phantom Liberty', start: new Date('2023-9-26'), color: { ...this.colors.blue }},
        {title: 'Streets of Rouge 2', start: new Date('2024-12-31'), color: { ...this.colors.blue }},
        {title: 'Eternights', start: new Date('2023-9-12'), color: { ...this.colors.blue }},
        {title: 'Robocop: Rogue City', start: new Date('2023-11-2'), color: { ...this.colors.blue }},
        {title: 'Star Trucker', start: new Date('2024-12-31'), color: { ...this.colors.blue }}
      ]

    events: EventEntry[] = [
        {title: 'Gamescom Opening Night', start: new Date('2023-8-22'), startTime: '19:30', color: { ...this.colors.yellow }, link: 'https://www.youtube.com/watch?v=eqh-rDzgVwQ'},
        {title: 'Modern Warfare 3 Open Beta', start: new Date('2023-10-14'), startTime: '19:00', end: new Date('2023-10-16'), color: {...this.colors.red}},
        {title: 'Minecraft Live', start: new Date('2023-10-15'), startTime: '19:00', color: { ...this.colors.yellow }, link: 'https://www.youtube.com/minecraft'},
        {title: 'PAX West', start: new Date('2023-9-1'), end: new Date('2023-9-4') , startTime: '???', color: { ...this.colors.yellow }, link: 'https://www.twitch.tv/PAX/'},
        {title: 'Game Awards', start: new Date('2023-12-8'), startTime: '???', color: { ...this.colors.yellow }, link: 'https://www.youtube.com/@thegameawards'}
    ]

    schedule: ScheduleEntry[] = [
      {start: this.transformDateForSchedule([4, 10, 2023], [16, 0]), title: 'MONKEY GAMEEEEEE', end: this.transformDateForSchedule([4, 10, 2023], [22, 0]), color: this.getColor('saddlebrown')},
      {start: this.transformDateForSchedule([5, 10, 2023], [16, 30]), title: 'VR Day', end: this.transformDateForSchedule([5, 10, 2023], [22, 0]), color: this.getColor('plum')},
      {start: this.transformDateForSchedule([6, 10, 2023], [15, 0]), title: 'GTA Weekend', end: this.transformDateForSchedule([8, 10, 2023], [22, 0]), color: this.getColor('indianred')},
      {start: this.transformDateForSchedule([9, 10, 2023], [16, 0]), title: 'MONKEY GAMEEEEEE', end: this.transformDateForSchedule([9, 10, 2023], [22, 0]), color: this.getColor('saddlebrown')},
    ];

    getCalendarList() {
      return this.gameReleases.concat(this.events as any)
    }

    getEvents() {
      return this.getTodayTransform(this.events)
    }

    getColor(color: string) {
      return {
        secondary: color
      }
    }

    getReleases() {
      return this.getTodayTransform(this.gameReleases)
    }

    transformDateForSchedule(date: number[], time: number[]) {
      return new Date(date[2], date[1] - 1, date[0], time[0], time[1])
    }

    getTodaySchedule(): ScheduleEntry[] {
      return this.getTodayTransform(this.schedule)
    }

    getTodayTransform(untransformedArr: any[]) {
      const today = new Date();
      let todayEntries = [];
    
      todayEntries = untransformedArr.filter(entry => {
        const entryStartDate = entry.start;
        const entryEndDate = entry.end; // Assuming you have an end date for the entry
        
        // Check if the entry's start date is today or if the date range includes today
        const isEntryToday =
          (entryStartDate <= today && today <= entryEndDate) ||
          (entryStartDate.getDate() === today.getDate() &&
            entryStartDate.getMonth() === today.getMonth() &&
            entryStartDate.getFullYear() === today.getFullYear());
    
        return isEntryToday;
      });
    
      return todayEntries;
    }
}