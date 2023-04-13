import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/enviornment';
import { Observable, map } from 'rxjs';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root'
})




export class GameService {
  constructor(
    private http: HttpClient
  ) {}

  searchByName(searchText: string): Observable<Game[]> {
    const alteredText = searchText.replace(/\s/g, '+');
    return this.http.get<Game[]>(`https://api.boardgameatlas.com/api/search?name=${alteredText}&client_id=${environment.boardgameAPI}`).pipe(
        map(response => response['games'])
    )
  };

}
