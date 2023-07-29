import { Routes } from "@angular/router";
import { GameCompletionListComponent } from "./game-completion-list/game-completion-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const APP_ROUTES: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'game-completion', component: GameCompletionListComponent}
]