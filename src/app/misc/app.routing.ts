import { Routes } from "@angular/router";
import { GamesListComponent } from "../components/games-list/games-list.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { AnimeListComponent } from "../components/anime-list/anime-list.component";
import { CalendarComponent } from "../components/calendar/calendar.component";
import { ScheduleComponent } from "../components/schedule/schedule.component";

export const APP_ROUTES: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'games', component: GamesListComponent},
    {path: 'anime', component: AnimeListComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'schedule', component: ScheduleComponent}
]