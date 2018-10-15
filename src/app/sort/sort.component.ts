import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

export interface SortParams {
  name: string;
  direction: 'asc'|'desc';
}

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnChanges {

  @Input('data') original: any[];
  @Input() sortParams: SortParams;
  @Output() sort: EventEmitter<any[]> = new EventEmitter();
  sorted: any[];

  constructor() { }

  ngOnChanges(chg: SimpleChanges) {
    if (chg['original']) {

      this.sortData();
      this.sort.emit(this.sorted);

    }
    else if (chg['sortParams']) {

      if (this.original) {
        this.sortData();
        this.sort.emit(this.sorted);
      }

    }
  }

  sortData() {
    let result = Object.assign([], this.original);

    if (!this.sortParams || !this.sortParams.name || !this.sortParams.direction) {
      this.sorted = result;
      return;
    }

    result = result.sort((a, b) => {

      if (this.sortParams.direction === 'asc') {

        if (typeof a[this.sortParams.name] === 'string') {
          if (a[this.sortParams.name] < b[this.sortParams.name])
            return -1;
          else
            return 1;
        }
        else if (typeof a[this.sortParams.name] === 'number')
          return a[this.sortParams.name] - b[this.sortParams.name];
        else
          return 0;

      }
      else if (this.sortParams.direction === 'desc') {

        if (typeof b[this.sortParams.name] === 'string') {
          if (b[this.sortParams.name] < a[this.sortParams.name])
            return -1;
          else
            return 1;
        }
        else if (typeof b[this.sortParams.name] === 'number')
          return b[this.sortParams.name] - a[this.sortParams.name];
        else
          return 0;

      }

    });

    this.sorted = result;
    return;
  }

}
