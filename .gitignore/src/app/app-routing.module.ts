import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import {AllMoviesComponent} from './all-movies/all-movies.component';
import { ByIdComponent } from './by-id/by-id.component';
import { ByYearComponent } from './by-year/by-year.component';



const appRouts: Routes = [
  {path: '', redirectTo: '/all-data', pathMatch: 'full'},
  {path: '', component: AllMoviesComponent},
  {path: 'by-id', component: ByIdComponent},
  {path: 'by year', component: ByYearComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})

export  class AppRoutingModule {}