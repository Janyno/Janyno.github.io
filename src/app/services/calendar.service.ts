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
      {
        start: this.transformDateForSchedule([4, 10, 2023], [16, 0]), title: 'MONKEY GAMEEEEEE', 
        end: this.transformDateForSchedule([4, 10, 2023], [22, 0]), color: this.getColor('saddlebrown')
      },
      {
        start: this.transformDateForSchedule([5, 10, 2023], [16, 30]), title: 'VR Day', 
        end: this.transformDateForSchedule([5, 10, 2023], [22, 0]), color: this.getColor('plum')
      },
      {
        start: this.transformDateForSchedule([6, 10, 2023], [15, 0]), title: 'GTA Weekend', 
        end: this.transformDateForSchedule([8, 10, 2023], [22, 0]), color: this.getColor('indianred')
      },
      {
        start: this.transformDateForSchedule([9, 10, 2023], [16, 0]), title: 'MONKEY GAMEEEEEE', 
        end: this.transformDateForSchedule([9, 10, 2023], [20, 0]), color: this.getColor('saddlebrown')
      },
      {
        start: this.transformDateForSchedule([10, 10, 2023], [16, 0]), title: 'Demo Dienstag', 
        end: this.transformDateForSchedule([10, 10, 2023], [22, 0]), color: this.getColor('aqua')},
      {
        start: this.transformDateForSchedule([11, 10, 2023], [16, 0]), title: 'Temtem', 
        end: this.transformDateForSchedule([11, 10, 2023], [22, 0]), color: this.getColor('cornflowerblue')
      },
      {
        start: this.transformDateForSchedule([12, 10, 2023], [16, 0]), title: 'Demo Donnerstag', 
        end: this.transformDateForSchedule([12, 10, 2023], [22, 0]), color: this.getColor('aqua')
      },
      {
        start: this.transformDateForSchedule([13, 10, 2023], [15, 0]), title: 'MW3 Weekend', 
        end: this.transformDateForSchedule([16, 10, 2023], [22, 0]), color: this.getColor('darkred')
      },
      {
        start: this.transformDateForSchedule([17, 10, 2023], [16, 0]), title: 'Tiny Tina´s Wonderlands', 
        end: this.transformDateForSchedule([21, 10, 2023], [17, 0]), color: this.getColor('hotpink')
      },
      {
        start: this.transformDateForSchedule([28, 10, 2023], [19, 0]), title: 'The Devil in Me', 
        end: this.transformDateForSchedule([29, 10, 2023], [22, 0]), color: this.getColor('dimgrey')
      },
      {
        start: this.transformDateForSchedule([31, 10, 2023], [19, 0]), title: 'The Quarry', 
        end: this.transformDateForSchedule([1, 11, 2023], [23, 59]), color: this.getColor('dimgrey')
      },
      {
        start: this.transformDateForSchedule([3, 11, 2023], [19, 0]), title: 'Modern Warfare 3', 
        end: this.transformDateForSchedule([5, 11, 2023], [22, 0]), color: this.getColor('darkred')
      },
      {
        start: this.transformDateForSchedule([22, 12, 2023], [16, 30]), title: 'Avatar Frontiers of Pandora', 
        end: this.transformDateForSchedule([22, 12, 2023], [21, 0]), color: this.getColor('lawngreen')
      },
      {
        start: this.transformDateForSchedule([22, 12, 2023], [21, 0]), title: 'Skyrim', 
        end: this.transformDateForSchedule([22, 12, 2023], [23, 59]), color: this.getColor('grey')
      },
      {
        start: this.transformDateForSchedule([23, 12, 2023], [9, 30]), title: 'Avatar Frontiers of Pandora', 
        end: this.transformDateForSchedule([23, 12, 2023], [16, 0]), color: this.getColor('lawngreen')
      },
      {
        start: this.transformDateForSchedule([23, 12, 2023], [20, 30]), title: 'ETS 2', 
        end: this.transformDateForSchedule([23, 12, 2023], [23, 59]), color: this.getColor('gold')
      },
      {
        start: this.transformDateForSchedule([24, 12, 2023], [9, 30]), title: 'Avatar Frontiers of Pandora', 
        end: this.transformDateForSchedule([24, 12, 2023], [18, 0]), color: this.getColor('lawngreen')
      },
      {
        start: this.transformDateForSchedule([24, 12, 2023], [21, 30]), title: 'Indie Games', 
        end: this.transformDateForSchedule([24, 12, 2023], [23, 59]), color: this.getColor('aquamarine')
      },
      {
        start: this.transformDateForSchedule([26, 12, 2023], [13, 0]), title: 'Bright Memory: Infinite', 
        end: this.transformDateForSchedule([26, 12, 2023], [18, 0]), color: this.getColor('mediumaquamarine')
      },
      {
        start: this.transformDateForSchedule([26, 12, 2023], [20, 0]), title: 'Postal 4', 
        end: this.transformDateForSchedule([26, 12, 2023], [23, 59]), color: this.getColor('darkred')
      },
      {
        start: this.transformDateForSchedule([27, 12, 2023], [10, 0]), title: 'Red Faction: Guerilla', 
        end: this.transformDateForSchedule([27, 12, 2023], [18, 0]), color: this.getColor('orange')
      },
      {
        start: this.transformDateForSchedule([27, 12, 2023], [20, 0]), title: 'Postal 4', 
        end: this.transformDateForSchedule([27, 12, 2023], [23, 59]), color: this.getColor('darkred')
      },
      {
        start: this.transformDateForSchedule([28, 12, 2023], [10, 0]), title: 'AC: Mirage', 
        end: this.transformDateForSchedule([29, 12, 2023], [23, 59]), color: this.getColor('beige')
      },
      {
        start: this.transformDateForSchedule([30, 12, 2023], [10, 0]), title: 'Eastern Exorcist', 
        end: this.transformDateForSchedule([30, 12, 2023], [18, 0]), color: this.getColor('lightgrey')
      },
      {
        start: this.transformDateForSchedule([30, 12, 2023], [20, 0]), title: 'Contraband Police', 
        end: this.transformDateForSchedule([30, 12, 2023], [23, 59]), color: this.getColor('yellow')
      },
      {
        start: this.transformDateForSchedule([13, 1, 2024], [0, 0]), title: 'Contraband Police', 
        end: this.transformDateForSchedule([13, 1, 2024], [23, 59]), color: this.getColor('yellow')
      },
      {
        start: this.transformDateForSchedule([14, 1, 2024], [11, 0]), title: 'Sims 4', 
        end: this.transformDateForSchedule([14, 1, 2024], [23, 0]), color: this.getColor('greenyellow')
      },
      {
        start: this.transformDateForSchedule([15, 1, 2024], [17, 0]), title: 'Bum Simulator', 
        end: this.transformDateForSchedule([15, 1, 2024], [23, 0]), color: this.getColor('saddlebrown')
      },
      {
        start: this.transformDateForSchedule([16, 1, 2024], [18, 0]), title: 'Sims 4', 
        end: this.transformDateForSchedule([16, 1, 2024], [22, 0]), color: this.getColor('greenyellow')
      },
      {
        start: this.transformDateForSchedule([17, 1, 2024], [18, 0]), title: 'Sims 4', 
        end: this.transformDateForSchedule([17, 1, 2024], [22, 0]), color: this.getColor('greenyellow')
      },
      {
        start: this.transformDateForSchedule([18, 1, 2024], [18, 0]), title: 'Sims 4', 
        end: this.transformDateForSchedule([18, 1, 2024], [22, 0]), color: this.getColor('greenyellow')
      },
      {
        start: this.transformDateForSchedule([19, 1, 2024], [15, 0]), title: 'Life is Strange 2', 
        end: this.transformDateForSchedule([19, 1, 2024], [23, 0]), color: this.getColor('coral')
      },
      {
        start: this.transformDateForSchedule([20, 1, 2024], [12, 0]), title: 'Life is Strange 2', 
        end: this.transformDateForSchedule([20, 1, 2024], [23, 59]), color: this.getColor('coral')
      },
      {
        start: this.transformDateForSchedule([21, 1, 2024], [12, 0]), title: 'Life is Strange 2', 
        end: this.transformDateForSchedule([21, 1, 2024], [23, 0]), color: this.getColor('coral')
      },
      {
        start: this.transformDateForSchedule([2, 2, 2024], [14, 0]), title: 'Resident Evil 4', 
        end: this.transformDateForSchedule([4, 2, 2024], [23, 0]), color: this.getColor('darkred')
      },
      {
        start: this.transformDateForSchedule([5, 2, 2024], [18, 0]), title: 'House Flipper', 
        end: this.transformDateForSchedule([5, 2, 2024], [22, 0]), color: this.getColor('dodgerblue')
      },
      {
        start: this.transformDateForSchedule([6, 2, 2024], [17, 0]), title: 'Demos', 
        end: this.transformDateForSchedule([6, 2, 2024], [23, 0]), color: this.getColor('azure')
      },
      {
        start: this.transformDateForSchedule([7, 2, 2024], [18, 0]), title: 'Demos', 
        end: this.transformDateForSchedule([7, 2, 2024], [22, 0]), color: this.getColor('azure')
      },
      {
        start: this.transformDateForSchedule([12, 2, 2024], [18, 0]), title: 'Blade & Sorcery', 
        end: this.transformDateForSchedule([12, 2, 2024], [20, 0]), color: this.getColor('lightgray')
      },
      {
        start: this.transformDateForSchedule([12, 2, 2024], [20, 0]), title: 'DBD Event', 
        end: this.transformDateForSchedule([12, 2, 2024], [23, 0]), color: this.getColor('dimgrey')
      },
      {
        start: this.transformDateForSchedule([13, 2, 2024], [17, 0]), title: 'DBD Event / House Flipper',
        end: this.transformDateForSchedule([13, 2, 2024], [23, 0]), color: this.getColor('dimgrey')
      },
      {
        start: this.transformDateForSchedule([14, 2, 2024], [18, 0]), title: 'DBD Event / House Flipper / Skyrim',
        end: this.transformDateForSchedule([14, 2, 2024], [23, 0]), color: this.getColor('dimgrey')
      },
      {
        start: this.transformDateForSchedule([15, 2, 2024], [17, 0]), title: 'House Flipper',
        end: this.transformDateForSchedule([15, 2, 2024], [23, 0]), color: this.getColor('lightblue')
      },
      {
        start: this.transformDateForSchedule([15, 2, 2024], [19, 0]), title: 'RE 4',
        end: this.transformDateForSchedule([15, 2, 2024], [23, 0]), color: this.getColor('silver')
      },
      {
        start: this.transformDateForSchedule([16, 2, 2024], [17, 0]), title: 'RE 4',
        end: this.transformDateForSchedule([16, 2, 2024], [20, 0]), color: this.getColor('silver')
      },
      {
        start: this.transformDateForSchedule([16, 2, 2024], [21, 0]), title: 'Skyrim',
        end: this.transformDateForSchedule([16, 2, 2024], [23, 59]), color: this.getColor('grey')
      },
      {
        start: this.transformDateForSchedule([17, 2, 2024], [13, 0]), title: 'Hellblade: Senuas Sacrifice',
        end: this.transformDateForSchedule([17, 2, 2024], [23, 59]), color: this.getColor('royalblue')
      },
      {
        start: this.transformDateForSchedule([18, 2, 2024], [13, 0]), title: 'RE 4',
        end: this.transformDateForSchedule([18, 2, 2024], [22, 0]), color: this.getColor('silver')
      },
      {
        start: this.transformDateForSchedule([1, 3, 2024], [18, 30]), title: 'Drake Hollow',
        end: this.transformDateForSchedule([1, 3, 2024], [23, 0]), color: this.getColor('purple')
      },
      {
        start: this.transformDateForSchedule([2, 3, 2024], [10, 30]), title: 'Drake Hollow',
        end: this.transformDateForSchedule([2, 3, 2024], [18, 0]), color: this.getColor('purple')
      },
      {
        start: this.transformDateForSchedule([2, 3, 2024], [19, 0]), title: 'Bramble: The Mountain King',
        end: this.transformDateForSchedule([2, 3, 2024], [23, 59]), color: this.getColor('forestgreen')
      },
      {
        start: this.transformDateForSchedule([3, 3, 2024], [11, 0]), title: 'Drake Hollow',
        end: this.transformDateForSchedule([3, 3, 2024], [23, 59]), color: this.getColor('purple')
      },
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