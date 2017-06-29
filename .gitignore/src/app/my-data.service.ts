import { Injectable } from '@angular/core';
import {HttpModule} from '@angular/http';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Observable} from "rxjs/Observable"
import 'rxjs/add/operator/map'


@Injectable()
export class MyDataService {

  constructor(private http: Http ) { }

    movieModel:{
      name: String,
      title: String,
      id: Number
  }


    getAllMovies(callback: Function){
        this.http.get('https://exercise-1.herokuapp.com/getAllMovies')
      .subscribe(
        (response: Response) =>  {
          console.log(response.json());
          callback(response.json());
        },
        (error => {
          console.log(error);
          callback(null);
        })
      );
    }

    getMovieById(data: number, callback: Function){
    let body = 'id='+data;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('exercise-1.herokuapp.com/getMovieData',body, options)
      .subscribe(
        (response: Response) =>  {
          console.log(response.json());
          callback(response.json());
        },
        (error => {
          console.log(error);
          callback(null);
        })
      );
    }

    getMovieByYears(data: number, callback: Function){
        let years = 'year='+data;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let selects = new RequestOptions({ headers: headers });
        this.http.post('https://exercise-1.herokuapp.com/getMovieByYears',years,selects)
        .subscribe(
        (response: Response) =>  {
          console.log(response.json());
          callback(response.json());
        },
        (error => {
          console.log(error);
          callback(null);
        })
        );
    }    




  success(){
      return "successfull";
  }
}
