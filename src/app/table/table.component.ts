import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CurrencyPipe } from "@angular/common";
import { ColumnMetadata } from "../data.service";

import { SortParams } from "../sort/sort.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {

  @Input() data: any[];
  @Input() columnMetadata: ColumnMetadata[];
  @Output() sort: EventEmitter<SortParams> = new EventEmitter();

  sortByColumn: string;
  sortDirection: 'asc'|'desc';

  constructor() { }

  ngOnChanges(chg: SimpleChanges) {}

  sortBy(columnName: string) {

    if (this.sortByColumn !== columnName) {
      this.sortByColumn = columnName;
      this.sortDirection = 'desc';
    }
    else if (this.sortDirection === 'asc') {
      this.sortByColumn = null;
      this.sortDirection = null;
    }
    else if (this.sortDirection === 'desc') {
      this.sortDirection = 'asc';
    }
    else {
      this.sortByColumn = null;
      this.sortDirection = null;
    }

    this.sort.emit({
      name: this.sortByColumn,
      direction: this.sortDirection
    });

  }

}
