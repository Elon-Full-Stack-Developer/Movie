import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from './movie';
import { UtilsService } from './utils.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  sub_1 : Subscription = new Subscription();
  sub_2 : Subscription = new Subscription();

  movies : Movie[] = [];

  filteresMovies : Movie[] = [];

  cheackSearchButton : boolean = false;

  constructor(private srv : UtilsService) {}


  Checkletters(Title : string, specificName : string)
  {
    let splitT = Title.split('');
    let splitS = specificName.split('');
    splitT.forEach((t,i) =>
    {
      if (t != splitS[i])
      {
        splitS[i] = typeof splitS[i] === 'string' ? splitS[i].toUpperCase() : '';
      }
      if (t != splitS[i])
      {
        splitS[i] = typeof splitS[i] === 'string' ? splitS[i].toLowerCase() : '';
      }
    })
    
    console.log(splitS.join(''));
    
    return splitS.join('');
  }


  SearchSpecificMovie(specificName : string)
  {
    if (specificName.length > 0)
    {
      let filterMovs = this.movies.filter(movie => movie.Title == this.Checkletters(movie.Title, specificName));
      
      if (filterMovs.length > 0)
      {
        this.filteresMovies = filterMovs;
        console.log(this.filteresMovies);
        
      }
      else
      {
        window.confirm("Movie not found!");
        this.filteresMovies = this.movies;
        console.log(this.filteresMovies);
      }
    }
    else
    {
      window.confirm("Please enter a movie name !")
    }

  }


  getAll(name : string)
  {
    this.cheackSearchButton = name.length > 0 ? true : false;

    if (this.cheackSearchButton)
    {
      this.sub_1 = this.srv.GetAllMovies(name)
        .subscribe((data) =>
        {
          let obj1 = data;
  
          obj1 = JSON.parse(obj1);
  
          if (obj1.Error && obj1.Response)
          {
            window.confirm(obj1.Error)
            console.log(obj1);
          }
          else
          {
            this.movies = obj1.Search;
    
            this.movies.forEach(movie =>
              {
                this.srv.GetFullMovieDataMovie(movie.Title)
                  .subscribe((fullMov) =>
                  {
                    let obj2 = JSON.parse(fullMov);
    
                    movie.imdbRating = obj2.imdbRating;
                    movie.Released = obj2.Released;
                    movie.Runtime = obj2.Runtime;
                    movie.Genre = obj2.Genre;
                    movie.Director = obj2.Director;
                    movie.Writer = obj2.Writer;
                    movie.Actors = obj2.Actors;
                    movie.Plot = obj2.Plot;
                    movie.Language = obj2.Language;
                    movie.Country = obj2.Country;
                    movie.Awards = obj2.Awards;
                    movie.Metascore = obj2.Metascore;
                    movie.DVD  = obj2.DVD ;
                    movie.imdbVotes = obj2.imdbVotes;
                    movie.BoxOffice = obj2.BoxOffice;
                    movie.Production = obj2.Production;
                    movie.Website = obj2.Website;
                    movie.Poster = obj2.Poster;
                  })
              })
            this.filteresMovies = this.movies;
            console.log(this.filteresMovies);
          }
  
        })
    }
    else
    {
      window.confirm("Please enter a movie name !")
    }
  }

  ngOnDestroy()
  {
    this.sub_1.unsubscribe();
    this.sub_2.unsubscribe();
  }
  
}
