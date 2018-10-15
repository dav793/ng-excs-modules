import { Component } from '@angular/core';

import { Car } from './car/car';
import { Movie } from './movie/movie';
import { ColumnMetadata, DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DataService ]
})
export class AppComponent {

  carsMetadata: ColumnMetadata[];
  originalCars: Car[];

  moviesMetadata: ColumnMetadata[];
  originalMovies: Movie[];

  constructor(private dataService: DataService) {
    this.carsMetadata = this.dataService.getCarsColumnMetadata();
    this.originalCars = this.dataService.getCars();

    this.moviesMetadata = this.dataService.getMoviesColumnMetadata();
    this.originalMovies = this.dataService.getMovies();
  }

}
