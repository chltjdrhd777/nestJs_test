import { Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';

@Controller({ path: 'movies' })
export class MoviesController {
  @Get()
  saySomething(): string {
    return 'test message home';
  }

  @Get('/:id')
  findOne(@Param() param: string): string {
    console.log(param);
    return param;
  }

  @Post('/postSomething')
  postMovie() {
    return 'you post this';
  }

  @Delete('/:id')
  deleteMovie(@Param('id') movieId: string) {
    return `this will remove ${movieId}`;
  }

  @Patch('/:id')
  patchMovie(@Param('id') movieId: string) {
    return `you patch ${movieId}`;
  }
}
