import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  moviedetails: any[] = [];
  constructor(private _HttpClient: HttpClient) {}
  getTrending(mediType: string): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/trending/${mediType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`
    );
  }
  getMovieDetails(id: string): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50`
    );
  }
}
