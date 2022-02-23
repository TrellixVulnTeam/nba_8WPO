import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Team } from 'src/app/model/model';
import { TeamService } from 'src/app/service/team.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  teamId: number;
  team: Team | undefined;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute
  ){
    // Pull teamId off this route and convert to type number
    this.teamId = +this.route.snapshot.paramMap.get("teamId");
  }

  

  ngOnInit(): void {
    this.teamService.getTeamDetails(this.teamId).subscribe((result: Team) => {
      this.team = {...result};
    });
  }

}
