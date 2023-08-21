// week-calendar.component.ts
import { Component } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { addWeeks, subWeeks, startOfWeek, endOfWeek } from 'date-fns';
import { formatDate, registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { ScheduleEntry } from '../model/calendar';
import { CalendarService } from '../services/calendar.service';

registerLocaleData(localeDe, 'de');

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  view: CalendarView = CalendarView.Week
  viewDate: Date = new Date()
  events: ScheduleEntry[] = []

  constructor(private calendarService: CalendarService) {
    this.events = this.calendarService.schedule
  }

  getWeekDateRange(date: Date): string {
    const start = startOfWeek(date, {weekStartsOn: 1})
    const end = endOfWeek(date, {weekStartsOn: 1})
    const formattedStart = formatDate(start, 'MMM d', 'en')
    const formattedEnd = formatDate(end, 'MMM d', 'en')
    return `${formattedStart} - ${formattedEnd}`
  }

  goToPreviousWeek(): void {
    this.viewDate = subWeeks(this.viewDate, 1)
  }

  goToNextWeek(): void {
    this.viewDate = addWeeks(this.viewDate, 1)
  }
}
