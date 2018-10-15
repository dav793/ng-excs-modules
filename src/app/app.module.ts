import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialPackageModule } from "./material-package/material-package.module";

import { TableModule } from "./table/table.module";
import { FilterModule } from './filter/filter.module';
import { SortModule } from "./sort/sort.module";

import { AppComponent } from './app.component';

/**
 *  Qué es un módulo?
 *    Una contenedor para un grupo de código dedicado a un dominio específico de la aplicación.
 *
 *  Cuales pueden ser las partes de un módulo?
 *    Componentes, Pipes, Directivas y Servicios.
 *
 *  Un módulo puede importar funcionalidades exportadas por otros módulos.
 *
 *  Las propiedades de metadatos de un módulo son las siguientes:
 *
 *    - declarations: Los componentes, pipes y directivas que pertenecen al módulo.
 *
 *    - exports: El subconjunto de declaraciones que deben ser visibles y utilizables por componentes, pipes o directivas de otros módulos.
 *
 *    - imports: Otros módulos cuyas clases exportadas son necesarias para los componentes, pipes o directivas declarados en este módulo.
 *
 *    - providers: Servicios utilizados por los componentes, pipes y directivas de este módulo (tambien pueden ser provistos en componentes).
 *
 *    - bootstrap:  La vista principal de la aplicación (conocida como el root component) que hospeda todas las demás vistas de la aplicación.
 *                  Unicamente el root component debe contener la propiedad bootstrap.
 */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialPackageModule,
    TableModule,
    FilterModule,
    SortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
