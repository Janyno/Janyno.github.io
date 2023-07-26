import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { GameCompletionListComponent } from './game-completion-list/game-completion-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GameCompletionListComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    [RouterModule.forRoot(APP_ROUTES),
    NgbModule
  ]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
