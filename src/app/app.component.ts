import { Component } from '@angular/core';

import { Car } from './car/car';
import { Movie } from './movie/movie';
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DataService ]
})
export class AppComponent {

  originalCars: Car[];
  finalCars: Car[];

  originalMovies: Movie[];
  finalMovies: Movie[];

  constructor(private dataService: DataService) {
    this.originalCars = this.dataService.getCars();
    this.originalMovies = this.dataService.getMovies();
  }

  setFilteredCars(cars: Car[]) {
    this.finalCars = cars;
  }

  setFilteredMovies(movies: Movie[]) {
    this.finalMovies = movies;
  }

}
