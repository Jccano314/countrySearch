import { ModalModule } from 'angular-custom-modal';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableContinentComponent } from './table-continent/table-continent.component';

@NgModule({
  declarations: [TableContinentComponent],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [
    TableContinentComponent
  ]
})
export class SharedComponentsModule { }
