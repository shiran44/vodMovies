import { Component } from '@angular/core';
import {MyDataService} from './my-data.service';
import { ByIdComponent } from './by-id/by-id.component';
import { ByYearComponent } from './by-year/by-year.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vod movies';


    constructor(private newService: MyDataService){
    }

    ngOnInit() {
    }
}
