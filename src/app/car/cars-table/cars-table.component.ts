import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css']
})
export class CarsTableComponent implements OnChanges {

  @Input() data: any[];
  columns = [
    'manufacturer',
    'model',
    'price'
  ];
  sortingByColumn: string;
  sortingDirection: 'asc'|'desc';

  constructor() { }

  ngOnChanges(chg: SimpleChanges) {
    if (chg['data']) {}
  }

  sortBy(column: string) {
    console.log('ok');
  }

}
