import { Routes } from "@angular/router";
import { GameCompletionListComponent } from "../games-list/games-list.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AnimeListComponent } from "../anime-list/anime-list.component";
import { CalendarComponent } from "../calendar/calendar.component";
import { ScheduleComponent } from "../schedule/schedule.component";

export const APP_ROUTES: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'games', component: GameCompletionListComponent},
    {path: 'anime', component: AnimeListComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'schedule', component: ScheduleComponent}
]