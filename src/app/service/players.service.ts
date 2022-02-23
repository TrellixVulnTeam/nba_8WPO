import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

import { Player } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  
  constructor(private http: HttpClient) {}

  getTeamPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>("/players/");
  }

  // Compare height/weight values from one player to the next. 
  // If return value is > 0 put b before a
  // If return value is < 0 put a before b
  // Otherwise leave them alone
  sortPlayers(playersArr: Player[], sortByStr: string): Player[] {
    if(sortByStr === 'height') {
      return playersArr.sort((firstPlayer, secondPlayer) => {
        return firstPlayer.heightInches > secondPlayer.heightInches ? 1 : -1;
      })
    } else if(sortByStr === 'weight'){
      return playersArr.sort((firstPlayer, secondPlayer) => {
        return firstPlayer.weightPounds > secondPlayer.weightPounds ? 1 : -1;
      })
    }
  }
}
