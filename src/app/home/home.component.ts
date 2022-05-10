import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingPeople: any[] = [];

  constructor(private _MoviesService: MoviesService) {
    //get trendingMovies
    this._MoviesService.getTrending('movie').subscribe((response) => {
      this.trendingMovies = response.results.slice(0, 10);
    });

    //get trendingTv
    this._MoviesService.getTrending('tv').subscribe((response) => {
      this.trendingTv = response.results.slice(0, 10);
    });

    //get trendingPeople
    this._MoviesService.getTrending('person').subscribe((response) => {
      this.trendingPeople = response.results.slice(0, 10);
    });
  }

  ngOnInit(): void {}
}
