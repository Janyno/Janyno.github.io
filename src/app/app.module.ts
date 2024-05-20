import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { APP_ROUTES } from './misc/app.routing';
import { HeaderComponent } from './components/header/header.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatusPipe } from './misc/status.pipe';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { BackgroundDirective } from './misc/background.directive';
import { DatePipe } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarDateFormatter, CalendarModule, CalendarWeekModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { CustomDateFormatter } from './misc/CustomDateFormatter';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesListComponent,
    DashboardComponent,
    StatusPipe,
    AnimeListComponent,
    BackgroundDirective,
    CalendarComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    [RouterModule.forRoot(APP_ROUTES)],
    NgbModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }, {
      dateFormatter: {
        provide: CalendarDateFormatter,
        useClass: CustomDateFormatter
      }
    }),
    CalendarWeekModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
