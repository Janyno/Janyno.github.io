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
        {title: 'Starfield', start: new Date('2023-9-01'), color: { ...this.colors.blue }}
      ]

    events: EventEntry[] = [
        {title: 'Summer Game Fest Start Showcase', start: new Date('2024-06-07'), startTime: '23:00', color: { ...this.colors.red }, link: ''},
        {title: 'Xbox Showcase', start: new Date('2024-06-09'), startTime: '19:00', color: { ...this.colors.blue }, link: ''},
        {title: 'Wholesome Direct', start: new Date('2024-06-08'), startTime: '18:00', color: { ...this.colors.yellow }, link: ''},
        {title: 'Latin American Games Showcase', start: new Date('2024-06-08'), startTime: '19:00', color: { ...this.colors.red }, link: ''},
        {title: 'Woman Led Studios', start: new Date('2024-06-08'), startTime: '20:30', color: { ...this.colors.blue }, link: ''},
        {title: 'PC Gaming Show', start: new Date('2024-06-09'), startTime: '22:00', color: { ...this.colors.yellow }, link: ''},
        {title: 'The Boys Staffel 4', start: new Date('2024-06-13'), startTime: '???', color: { ...this.colors.red }, link: 'https://www.amazon.de/gp/video/detail/B09WV7KSHJ/ref=atv_dp_season_select_s3'}
    ]

    schedule: ScheduleEntry[] = [
      {
        start: this.transformDateForSchedule([4, 10, 2023], [16, 0]), title: 'MONKEY GAMEEEEEE', 
        end: this.transformDateForSchedule([4, 10, 2023], [22, 0]), color: this.getColor('saddlebrown')
      }
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
        const entryStartDate = entry.start
        const entryEndDate = entry.end
        
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