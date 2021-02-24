import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableContinentComponent } from './table-continent/table-continent.component';

@NgModule({
  declarations: [TableContinentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TableContinentComponent
  ]
})
export class SharedComponentsModule { }
