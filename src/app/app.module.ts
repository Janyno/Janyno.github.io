import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { GameCompletionListComponent } from './game-completion-list/game-completion-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusPipe } from './misc/status.pipe';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { BackgroundDirective } from './background.directive';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameCompletionListComponent,
    DashboardComponent,
    StatusPipe,
    AnimeListComponent,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    [RouterModule.forRoot(APP_ROUTES),
    NgbModule
  ]
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
