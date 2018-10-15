import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.css']
})
export class MoviesTableComponent implements OnChanges {

  @Input() data: any[];
  columns = [
    'title',
    'year',
    'director',
    'genre'
  ];

  constructor() { }

  ngOnChanges(chg: SimpleChanges) {
    if (chg['data']) {}
  }

}
