import { Component, ElementRef, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { CalendarService } from '../services/calendar.service';
import { addMonths, subMonths } from 'date-fns';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: any = []
  selectedEvent: CalendarEvent | null = null;
  @ViewChild('eventModal', { static: true }) eventModal!: ElementRef;

  constructor(private calendarService: CalendarService, private modalService: NgbModal) {
    this.events = this.calendarService.getCalendarList()
  }

  goToPreviousMonth(): void {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  goToNextMonth(): void {
    this.viewDate = addMonths(this.viewDate, 1);
  }

  openEventModal(event: CalendarEvent): void {
    if (event.hasOwnProperty('startTime')) {
      this.selectedEvent = event;
      this.modalService.open(this.eventModal)
    }
  }

  closeEventModal(): void {
    this.modalService.dismissAll()
  }

  getStartTime(event: any): string | null {
    for (const eventEntry of this.events) {
      if (eventEntry.title === event.title) {
        return eventEntry.startTime;
      }
    }
    return null;
  }

  getLink(event: any): string | null {
    for (const eventEntry of this.events) {
      if (eventEntry.title === event.title) {
        return eventEntry.link;
      }
    }
    return null;
  }
 }

