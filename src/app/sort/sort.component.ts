import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnChanges {

  @Input() original: any[];
  @Output() sort: EventEmitter<any[]> = new EventEmitter();
  sorted: any[];

  columns: string[];

  constructor() { }

  ngOnChanges(chg: SimpleChanges) {
  }

}
