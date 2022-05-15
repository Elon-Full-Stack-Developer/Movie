import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  movieData : Movie = new Movie("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");

  ShowMore : boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
