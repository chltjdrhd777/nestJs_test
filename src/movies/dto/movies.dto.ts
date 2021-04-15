/* import { Movie } from 'src/movies/entities/movies.types';

export interface MovieDto extends Readonly<Omit<Movie, 'id'>> {}
 */
import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class MoviesDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsString({ each: true, always: true })
  readonly generes: string[];
}

export class MoviesDto_Partial extends PartialType(MoviesDto) {}
