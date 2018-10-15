import { Component } from '@angular/core';

import { Car } from './car/car';
import { Movie } from './movie/movie';
import { ColumnMetadata, DataService } from "./data.service";
import {SortParams} from "./sort/sort.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DataService ]
})
export class AppComponent {

  carsMetadata: ColumnMetadata[];
  originalCars: Car[];
  filteredCars: Car[];
  sortedCars: Car[];
  carSortParams: SortParams;

  moviesMetadata: ColumnMetadata[];
  originalMovies: Movie[];
  filteredMovies: Movie[];
  sortedMovies: Movie[];
  movieSortParams: SortParams;

  constructor(private dataService: DataService) {
    this.carsMetadata = this.dataService.getCarsColumnMetadata();
    this.originalCars = this.dataService.getCars();

    this.moviesMetadata = this.dataService.getMoviesColumnMetadata();
    this.originalMovies = this.dataService.getMovies();
  }

  setFilteredCars(cars: Car[]) {
    this.filteredCars = cars;
  }

  triggerCarSort(sortParams: SortParams) {
    this.carSortParams = sortParams;
  }

  setSortedCars(cars: Car[]) {
    this.sortedCars = cars;
  }

  setFilteredMovies(movies: Movie[]) {
    this.filteredMovies = movies;
  }

  triggerMovieSort(sortParams: SortParams) {
    this.movieSortParams = sortParams;
  }

  setSortedMovies(movies: Movie[]) {
    this.sortedMovies = movies;
  }

}
