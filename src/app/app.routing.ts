import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GameCompletionListComponent } from "./game-completion-list/game-completion-list.component";

export const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'game-completion', component: GameCompletionListComponent}
]