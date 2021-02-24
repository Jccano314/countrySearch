import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindCountryDashboardComponent } from '../../components/find-country-dashboard/find-country-dashboard.component';
import { HomeComponent } from '../../components/home/home.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/countries/find-country',
      pathMatch: 'full',
  },
  {
      path: 'countries',
      component: HomeComponent,
      data: {
          title: 'Home'
      },
      children: [
        {
            path: '',
            redirectTo: 'find-country',
            pathMatch: 'full'
        },
        {
            path: 'find-country',
            component: FindCountryDashboardComponent,
            data: {
                title: 'Find Country'
            }
        },
      ]
  },
  {
    path: '**',
    redirectTo: '/countries/find-country',
    pathMatch: 'full',
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class HomeRouterModule { }
