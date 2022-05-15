import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http : HttpClient) { }


  GetAllMovies(search : string)
  {
    return this.http.get<any>(`http://localhost:52274/api/movie/?search=${search}`)
  }

  GetFullMovieDataMovie(name : string)
  {
    return this.http.get<any>(`http://localhost:52274/api/fullmoviedata/?name=${name}`)
  }
}
