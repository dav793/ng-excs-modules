import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialPackageModule } from "../material-package/material-package.module";

import { TableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialPackageModule
  ],
  declarations: [TableComponent],
  exports: [TableComponent]
})
export class TableModule { }
