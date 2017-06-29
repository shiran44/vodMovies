import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MyDataService} from './my-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { ByIdComponent } from './by-id/by-id.component';
import { ByYearComponent } from './by-year/by-year.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllMoviesComponent,
    ByIdComponent,
    ByYearComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
        {path: '', component: AllMoviesComponent},
        {path: 'by-id', component: ByIdComponent},
        {path: 'by-year', component: ByYearComponent}
    ])
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
