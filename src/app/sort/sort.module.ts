import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialPackageModule } from "../material-package/material-package.module";

import { SortComponent } from './sort.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialPackageModule
  ],
  declarations: [SortComponent],
  exports: [SortComponent]
})
export class SortModule { }
