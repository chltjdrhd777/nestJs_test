import { Movie } from './entities/movies.types';
import { Injectable, NotFoundException } from '@nestjs/common';
import { MoviesDto, MoviesDto_Partial } from './dto/movies.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [
    {
      id: 112112132,
      title: 'testMovie',
      year: 2000,
      generes: ['fun', 'easy', 'calm'],
    },
    {
      id: 11211213212,
      title: 'testMovie2',
      year: 20005,
      generes: ['fun', 'easy', 'calm'],
    },
    {
      id: 1121121325123,
      title: 'testMovie3',
      year: 20007,
      generes: ['fun', 'easy', 'calm'],
    },
  ];

  getAllMovies(): Movie[] {
    return this.movies;
  }

  getOneMovie(id: number): Movie {
    //+id === parseInt(id)
    const movie = this.movies.find((movie) => movie.id === id);
    console.log(typeof id);
    if (!movie) {
      throw new NotFoundException('Movie not found');
    }
    return movie;
  }

  createMovie(movieData: MoviesDto) {
    this.movies.push({
      id: Math.ceil(Math.random() * 5),
      ...movieData,
    });
  }

  deleteOneMovie(id: number) {
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  patchMovie(id: number, updateData: MoviesDto_Partial) {
    const targetMovieIndex = this.movies.findIndex((movie) => movie.id === id);
    this.movies[targetMovieIndex] = {
      ...this.movies[targetMovieIndex],
      ...updateData,
    };
    return this.movies;
  }
}
