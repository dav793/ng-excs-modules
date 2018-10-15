import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialPackageModule } from "../material-package/material-package.module";

import { FilterComponent } from './filter.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialPackageModule
  ],
  declarations: [FilterComponent],
  exports: [FilterComponent]
})
export class FilterModule { }
