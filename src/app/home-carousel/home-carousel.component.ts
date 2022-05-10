import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss'],
})
export class HomeCarouselComponent implements OnInit {
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  @Input() trendingMovies: any[] = [];
  itemsPerSlide = 1;
  ngOnInit(): void {}
}
