import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnChanges {

  @Input('data') original: any[];
  @Output() filter: EventEmitter<any[]> = new EventEmitter();
  filtered: any[];

  columns: string[];
  selectedColumn: string;
  options: {value: any, selected: boolean}[];

  constructor() { }

  ngOnChanges(chg: SimpleChanges) {
    if (chg['original']) {  // original was changed
      this.setColumns();
      this.filtered = Object.assign([], this.original);
      this.filter.emit(this.filtered);
    }
  }

  setColumns() {

    let results = [];
    this.original.forEach(row => {                    // add all columns for each row
      results = results.concat(Object.keys(row));
    });

    results = results.filter(function(item, pos) {    // remove repeated columns
      return results.indexOf(item) === pos;
    });

    this.columns = results;

  }

  selectColumn(selected: string) {
    this.setOptions();
    this.filtered = [];
    this.filter.emit(this.filtered);
  }

  setOptions() {

    let options = [];
    this.original.forEach(row => {                    // add all options for selected column of each row

      if (Array.isArray(row[this.selectedColumn]))
        options = options.concat(row[this.selectedColumn]);
      else
        options.push(row[this.selectedColumn]);

    });

    options = options.filter(function(item, pos) {    // remove repeated options
      return options.indexOf(item) === pos;
    });

    this.options = options.map(option => {
      return {value: option, selected: false};
    });

  }

  toggleOption(option: {value: any, selected: boolean}) {
    option.selected = !option.selected;
    this.filterOriginal();
  }

  filterOriginal() {

    let filtered = Object.assign([], this.original);
    filtered = filtered.filter(row => {

      if (Array.isArray(row[this.selectedColumn])) {      // filter multi-value column

        let include = false;
        row[this.selectedColumn].forEach(singleVal => {

          let option = this.options.find(opt => opt.value === singleVal);
          if (option && option.selected)
            include = true;

        });
        return include;

      }
      else {                                              // filter single-value column

        let option = this.options.find(opt => opt.value === row[this.selectedColumn]);
        if (option && option.selected)
          return true;
        return false;

      }

    });

    this.filtered = filtered;
    this.filter.emit(this.filtered);

  }

  clearFilter() {
    this.selectedColumn = null;
    this.setColumns();
    this.options = [];
    this.filtered = Object.assign([], this.original);
    this.filter.emit(this.filtered);
  }

}
