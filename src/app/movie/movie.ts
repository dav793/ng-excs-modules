export class Movie {

  title: string;
  year: string;
  director: string;
  genre: string[];

  constructor(data: any) {
    this.title = data.title || '';
    this.year = data.year || '';
    this.director = data.director || '';
    this.genre = data.genre || [];
  }

}
