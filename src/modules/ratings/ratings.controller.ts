import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RatingsRepository } from './ratings.repository';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CreateRatingOrmDto } from './dto/create-rating-orm.dto';

@Controller('ratings')
@ApiBearerAuth()
@ApiTags('Ratings')
export class RatingsController {
  constructor(private readonly _ratingsRepository: RatingsRepository) {}

  @Get('/all')
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this._ratingsRepository.getAll();
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  getOne(@Param('id') id: string) {
    return this._ratingsRepository.getRatingById(id);
  }

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateRatingOrmDto) {
    return this._ratingsRepository.createRating(dto);
  }

  @Delete('/delete')
  @UseGuards(JwtAuthGuard)
  deleteOne(@Param('id') id: string) {
    return this._ratingsRepository.deleteRating(id);
  }
}
