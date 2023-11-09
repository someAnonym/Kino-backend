import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  UpdateReviewUseCase,
  UpdateReviewUseCaseSymbol,
} from 'src/domains/ports/in/update-review.use-case';
import { ReviewsRepository } from './reviews.repository';
import { CreateReviewOrmDto } from './dto/create-review.dto';
import { UpdateReviewOrmDto } from './dto/update-review.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UpdateReviewCommand } from 'src/domains/ports/in/update-review.command';

@Controller('reviews')
@ApiBearerAuth()
@ApiTags('Reviews')
export class ReviewController {
  constructor(
    @Inject(UpdateReviewUseCaseSymbol)
    private readonly _updateReviewUseCase: UpdateReviewUseCase,

    private readonly _reviewsRepository: ReviewsRepository,
  ) {}

  @Get('/all')
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this._reviewsRepository.getAll().populate('user');
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  getOne(@Param('id') id: string) {
    return this._reviewsRepository
      .getOneById(id)
      .populate('user', 'avatarImage reviews name secondName');
  }

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  async create(@Body() dto: CreateReviewOrmDto) {
    return (await this._reviewsRepository.create(dto)).populate('user');
  }

  @Put('/update')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() dto: UpdateReviewOrmDto) {
    const command = new UpdateReviewCommand(id, dto.likes, dto.dislikes, dto.comments);

    const updatedReview = await this._updateReviewUseCase.UpdateReview(command);

    return await this._reviewsRepository.update(updatedReview);
  }

  @Delete('/delete')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: string) {
    return this._reviewsRepository.delete(id);
  }
}
