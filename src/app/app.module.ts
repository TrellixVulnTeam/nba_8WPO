import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { TeamListComponent } from './component/team-list/team-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TeamDetailsComponent } from './component/team-details/team-details.component';
import {ServerMockService} from "./mock/server-mock.service";
import { AllLeaguePlayersComponent } from './component/all-league-players/all-league-players.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './component/card/card.component';
import { TableComponent } from './component/table/table.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: TeamListComponent},
      { path: 'details/:teamId', component: TeamDetailsComponent},
      { path: 'league', component: AllLeaguePlayersComponent}
    ],{ useHash: true, relativeLinkResolution: 'legacy' }),
    FontAwesomeModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TeamListComponent,
    TeamDetailsComponent,
    AllLeaguePlayersComponent,
    CardComponent,
    TableComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ServerMockService, multi: true }]
})
export class AppModule { }
