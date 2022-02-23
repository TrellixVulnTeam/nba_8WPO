import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/model';
import { TeamService } from '../../service/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Team[] | undefined;

  constructor(
    private teamService: TeamService
  ) {}

  // Get all teams on app load
  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe((result: Team[]) => {
      this.teams = [...result];
    });

  }
}
