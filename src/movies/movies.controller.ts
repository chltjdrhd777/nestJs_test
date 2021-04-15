import { MoviesService } from './movies.service';
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { Movie } from './entities/movies.types';
import { MoviesDto, MoviesDto_Partial } from './dto/movies.dto';

@Controller({ path: 'movies' })
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}

  @Get()
  getAllMovies(): Movie[] {
    return this.MoviesService.getAllMovies();
  }

  @Get('/:id')
  getOneMovie(@Param('id' /* ParseIntPipe */) id: number): Movie {
    return this.MoviesService.getOneMovie(id);
  }

  @Post('/addMovie')
  createMovie(@Body() movieData: MoviesDto) {
    return this.MoviesService.createMovie(movieData);
  }

  @Delete('/:id')
  deleteMovie(@Param('id' /* ParseIntPipe */) movieId: number) {
    return this.MoviesService.deleteOneMovie(movieId);
  }

  @Patch('/:id')
  patchMovie(
    @Param('id' /* ParseIntPipe */) movieId: number,
    @Body() updateData: MoviesDto_Partial,
  ) {
    return this.MoviesService.patchMovie(movieId, updateData);
  }
}
