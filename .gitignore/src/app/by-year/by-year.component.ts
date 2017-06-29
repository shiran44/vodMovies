import { Component, OnInit } from '@angular/core';
import {MyDataService} from '../my-data.service';
import {Form, NgForm} from '@angular/forms';

@Component({
  selector: 'app-by-year',
  templateUrl: './by-year.component.html',
  styleUrls: ['./by-year.component.css']
})
export class ByYearComponent implements OnInit {
  years: number; 
  movies = null; 
  isThereData: boolean = true; 

  constructor(private newService: MyDataService) { }

  ngOnInit() {
  }

    onFindGenreSubmit(form: NgForm){
    console.log(form);
    this.movies = null;
    this.years = form.value.years;
    this.newService.getMovieByYears(form.value,(movies)=>{
      console.log(movies);
      if(movies && !movies.Error && movies.length > 0){
        this.isThereData = true;
        this.movies = movies;
      }else {
        this.isThereData = false;
        setTimeout(()=>{this.isThereData = true},3000);
      }
    });

  }

}
