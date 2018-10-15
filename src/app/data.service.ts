import { Injectable } from '@angular/core';
import { Movie } from "./movie/movie";
import { Car } from "./car/car";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCars(): Car[] {
    return [
      {
        manufacturer: 'Nissan',
        model: 'GT-R',
        price: 80000,
      },
      {
        manufacturer: 'BMW',
        model: 'M3',
        price: 60500
      },
      {
        manufacturer: 'Audi',
        model: 'S5',
        price: 53000,
      },
      {
        manufacturer: 'Audi',
        model: 'TT',
        price: 40000,
      }
    ];
  }

  getMovies(): Movie[] {
    return [
      {
        title: 'It\'s a Wonderful Life',
        year: '1946',
        director: 'Frank Capra',
        genre: [
          'fantasy',
          'comedy',
          'drama'
        ]
      },
      {
        title: 'Pulp Fiction',
        year: '1994',
        director: 'Quentin Tarantino',
        genre: [
          'black comedy',
          'neo-noir',
          'crime'
        ]
      },
      {
        title: 'American Psycho',
        year: '2000',
        director: 'Mary Harron',
        genre: [
          'satire',
          'black comedy',
          'psychological horror'
        ]
      },
      {
        title: 'Kill Bill',
        year: '2003',
        director: 'Quentin Tarantino',
        genre: [
          'martial arts'
        ]
      }
    ];
  }

}
