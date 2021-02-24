import { ModalModule } from 'angular-custom-modal';
import { SharedComponentsModule } from './../shared-components/shared-components.module';
import { Helper } from './helpers/helper';
import { GeneralService } from './shared/services/general.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { HomeRouterModule } from './utilis/routes';
import { FindCountryDashboardComponent } from './components/find-country-dashboard/find-country-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterCountryComponent } from './components/filter-country/filter-country.component';
import { CountryListComponent } from './components/country-list/country-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    FindCountryDashboardComponent,
    FilterCountryComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HomeRouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    ModalModule
  ],
  exports: [
    HomeRouterModule
  ],
  providers: [
    GeneralService,
    Helper
  ],
  bootstrap: [HomeComponent]
})
export class FindCountryModule { }
