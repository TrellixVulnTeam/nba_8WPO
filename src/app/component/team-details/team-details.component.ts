import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../service/team.service';
import { PlayersService } from '../../service/players.service';
import { Team, Player } from '../../model/model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit{
  teamId: number;
  team: Team | undefined;
  allTeamPlayers: Player[] | undefined;
  currentTeamPlayers: Player[];
  showAllPlayers = false;
  sortBy = '';

  constructor(
    // Pass in services and route providers
    private teamService: TeamService,
    private playersService: PlayersService,
    private route: ActivatedRoute
  ){
    // Pull teamId off this route and convert to type number
    this.teamId = +this.route.snapshot.paramMap.get("teamId");
  }

  // On load get team details from given teamId from mock http request (observable)
  ngOnInit(): void {

    // Use created players service to get all league players from mock http request (observable)
    this.playersService.getTeamPlayers().subscribe((result: Player[]) => {
      // Get all players ever from that team by Id because we can't query that (API improvement)
      const convertedResult = [...result];

      const teamsPlayers = convertedResult.filter((player: Player) => player.teamId === this.teamId);

      // Display current team players initially - show all team players when toggling button

      // Set all players ever from that team from filtered players
      this.allTeamPlayers = teamsPlayers;

      // Get all players that have a current position on the team to display as current players on team? Would need clarification as to who to display initially before clicking show all time players (I don't know basketball)
      this.currentTeamPlayers = teamsPlayers.filter(player => player.position !== '');
    })
  }

  // Toggle all players method to set conditional to render all players ever or not
  onToggleAllPlayers() {
    this.showAllPlayers = !this.showAllPlayers;
    this.sortBy = '';
  }

  onSort(event) {
    // Please see players service for sortPlayers() description
    // Sort height of all team players
    if(event.target.value === 'height' && this.showAllPlayers) {
      this.allTeamPlayers = this.playersService
      .sortPlayers(this.allTeamPlayers, 'height');
    }

    // Sort height of current team players
    if(event.target.value === 'height' && !this.showAllPlayers) {
      this.currentTeamPlayers = this.playersService
      .sortPlayers(this.currentTeamPlayers, 'height');
    }

    // Sort weight of all team players
    if(event.target.value === 'weight' && this.showAllPlayers) {
      this.allTeamPlayers = this.playersService
      .sortPlayers(this.allTeamPlayers, 'weight');
    }

    // Sort weight of current team players
    if(event.target.value === 'weight' && !this.showAllPlayers) {
      this.currentTeamPlayers = this.playersService
      .sortPlayers(this.currentTeamPlayers, 'weight');
    }
  }
}
