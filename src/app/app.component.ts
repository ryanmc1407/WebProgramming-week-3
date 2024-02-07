import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService } from './Services/movie.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-list';

  movies:any[]=[];

  constructor(private movieService:MovieService) {}

  ngOnInit() {
    this.movies=this.movieService.getMovies();
    console.log(this.movies);
  }
   

}
