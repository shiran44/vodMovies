import { Component, OnInit } from '@angular/core';
import {MyDataService} from '../my-data.service';
import {Form, NgForm} from '@angular/forms';

@Component({
  selector: 'app-by-id',
  templateUrl: './by-id.component.html',
  styleUrls: ['./by-id.component.css']
})
export class ByIdComponent implements OnInit {

  movie = null;
  isThereData: boolean = true; // Data flag

  constructor(private newService: MyDataService){

  }

  ngOnInit() {
  }

  onFindMovie(form: NgForm){
    this.movie = null;
    this.newService.getMovieById(form.value.id,(movie)=>{
      if(movie && !movie.Error){
        this.isThereData = true;
        this.movie = movie;
      }else {
        //showing error
        this.isThereData = false;
        setTimeout(()=>{this.isThereData = true},3000);
      }
    });
    }

}
