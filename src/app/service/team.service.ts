import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Team } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private http: HttpClient) {}

  // We request our http request to be a typed response, BUT the response is a object and isn't automatically converted into a class, so we switch our models to interfaces

  getAllTeams(): Observable<Team[]> {
    return this.http.get<Team[]>("/teams/");
  }

  getTeamDetails(teamId: number): Observable<Team> {
    return this.http.get<Team>(("/teams/" + teamId));
  }
}
