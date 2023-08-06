import { Routes } from "@angular/router";
import { GameCompletionListComponent } from "./game-completion-list/game-completion-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AnimeListComponent } from "./anime-list/anime-list.component";

export const APP_ROUTES: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'games', component: GameCompletionListComponent},
    {path: 'anime', component: AnimeListComponent}
]