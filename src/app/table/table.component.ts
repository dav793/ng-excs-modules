import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CurrencyPipe } from "@angular/common";
import { ColumnMetadata } from "../data.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {

  @Input() data: any[];
  @Input() columnMetadata: ColumnMetadata[];

  constructor() { }

  ngOnChanges(chg: SimpleChanges) {}

}
