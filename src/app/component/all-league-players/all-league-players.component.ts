import { Component, OnInit } from '@angular/core';

import { PlayersService } from '../../service/players.service';
import { Player } from '../../model/model';

import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all-league-players',
  templateUrl: './all-league-players.component.html',
  styleUrls: ['./all-league-players.component.css']
})
export class AllLeaguePlayersComponent implements OnInit {
  rightArrow = faAngleRight;
  leftArrow = faAngleLeft;
  leaguePlayers: Player[];
  page = 1;
  perPage = 10;
  totalPages: number;
  resultsByPage: Player[];

  sortBy = '';

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.playersService.getTeamPlayers().subscribe((result: Player[]) => {
      // Set league players to array with every single player
      this.leaguePlayers = [...result];

      // total pages = total player count / per page selected (default 10) and rounded up to catch any overflow (The .8 results that will be displayed on last page)
      // Ex.) 3268 players / 10 = 326.8 || 327
      this.totalPages = Math.ceil(this.leaguePlayers.length / this.perPage);

      // Show first page results on load
      this.getResultsPerPage(this.page);
    })
  }

  getResultsPerPage(pageNum: number) {
    // Guard clause to prevent going under or over total amount of pages
    if(this.page < 1 || this.page > this.totalPages) return;
    

    // Determine start & end position based on per page to slice out of total array
    // Ex.) Page number is 5. (5 - 1) = 4. 4 * 10 = 40. Start = 40.
    // Page number is 5. 5 * 10 = 50. End = 50.
    // Slice starts from the start the end NOT including the end so this will give us proper pages corresponding to indexes. Result 40, 41, 42, 43, 44, 45, 46, 47, 48 ,49 || 10 results.
    // Set the results for that page to the portion of the total player array we want to display
    const start = (pageNum - 1) * this.perPage;
    const end = pageNum * this.perPage;
    this.resultsByPage = this.leaguePlayers.slice(start, end);
  }

  nextPage() {
    // Guard clause to prevent going over total pages
    if(this.page === this.totalPages) return;

    // Change to next page and rerender
    this.page++;
    this.getResultsPerPage(this.page);
  }

  prevPage() {
    // Guard clause to prevent going under 1st page
    if(this.page === 1) return;
    
    // Change to prev page and rerender
    this.page--;
    this.getResultsPerPage(this.page);
  }

  onSort(event) {
    // Sort by height
    if(event.target.value === 'height') {
      this.leaguePlayers = this.playersService.sortPlayers(this.leaguePlayers, 'height');
      // Rerender page with sorted players
      this.getResultsPerPage(this.page);
    }

    // Sort by weight
    if(event.target.value === 'weight') {
      this.leaguePlayers = this.playersService.sortPlayers(this.leaguePlayers, 'weight');
      // Rerender page with sorted players
      this.getResultsPerPage(this.page);
    }
  }

  onPerPage() {
    // Reset sort to prevent conflicts between selected sort and amount per page
    console.log(this.perPage);
    this.leaguePlayers = undefined;
    this.resultsByPage = undefined;
    this.sortBy = '';
    // Get fresh players array show based on perPage
    this.playersService.getTeamPlayers().subscribe((result: Player[]) => {
      // Set league players to array with every single player
      this.leaguePlayers = [...result];
      // Recalculate total number of pages for pagination
      this.totalPages = Math.ceil(this.leaguePlayers.length / this.perPage);
      // Render new per page results
      this.getResultsPerPage(this.page);
    })
  }
}
