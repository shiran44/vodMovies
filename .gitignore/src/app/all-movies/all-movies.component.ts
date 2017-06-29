import { Component, OnInit } from '@angular/core';
import {MyDataService} from '../my-data.service';



@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {


    movies; 
    isThereData = true; // Data flag

  constructor(private newService: MyDataService){

  }


  ngOnInit() {
      console.log(this.newService.success());
     // this.newService.fechData();

      this.newService.getAllMovies((movies) => {
      this.movies = movies;
      this.isThereData = (movies || movies.length > 0);
        });
    }

}
