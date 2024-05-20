// week-calendar.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { addWeeks, subWeeks, startOfWeek, endOfWeek } from 'date-fns';
import { formatDate, registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { ScheduleEntry } from '../../model/calendar';
import { CalendarService } from '../../services/calendar.service';

registerLocaleData(localeDe, 'de');

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  view: CalendarView = CalendarView.Week
  viewDate: Date = new Date()
  events: ScheduleEntry[] = []
  daysInWeek = 7

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkWindowSize()
  }

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.events = this.calendarService.schedule
    this.checkWindowSize()
  }

  private checkWindowSize(): void {
    const mobileViewBreakpoint = 768
    const isMobileView = window.innerWidth < mobileViewBreakpoint

    this.daysInWeek = isMobileView ? 3 : 7
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
