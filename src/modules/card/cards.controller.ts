import { Body, Controller, Get, Inject, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UpdateCardDto } from './dto/update-card.dto';
import { UpdateCardCommand } from 'src/domains/ports/in/update-card.command';
import { CardsRepository } from './cards.repository';
import {
  UpdateCardUseCase,
  UpdateCardUseCaseSymbol,
} from 'src/domains/ports/in/update-card.use-case';
import { CreateCardOrmDto } from './dto/create-card.dto';

@Controller('cards')
@ApiBearerAuth()
@ApiTags('Cards')
export class CardsController {
  constructor(
    @Inject(UpdateCardUseCaseSymbol)
    private readonly _updateCardUseCase: UpdateCardUseCase,

    private readonly cardsRepository: CardsRepository,
  ) {}

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  getMe(@Param('id') id: string) {
    return this.cardsRepository
      .findById(id)
      .populate('ratings', 'whoose rate')
      .populate('persons', 'name englishName avatarImage')
      .populate('awards', 'picture name description year')
      .populate('quotes', 'text whoseText')
      .populate('reviews', 'typeOfReview title user date text')
      .populate({
        path: 'reviews',
        populate: {
          path: 'user',
        },
      })
      .populate('directors');
  }

  @Put('/update/:id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() dto: UpdateCardDto) {
    const command = new UpdateCardCommand(id, dto.reviews, dto.likes, dto.dislikes, dto.favorites);
    const updateCardEntity = await this._updateCardUseCase.UpdateCard(command);
    const updatedCard = this.cardsRepository.findById(updateCardEntity.id);
    return updatedCard
      .populate('ratings', 'whoose rate')
      .populate('persons', 'name englishName avatarImage')
      .populate('awards', 'picture name description year')
      .populate('quotes', 'text whoseText')
      .populate('reviews', 'typeOfReview title user date text')
      .populate({
        path: 'reviews',
        populate: {
          path: 'user',
        },
      })
      .populate('directors');
  }

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  async create(@Body() dto: CreateCardOrmDto) {
    return await this.cardsRepository.create(dto);
  }

  @Get('/search')
  @UseGuards(JwtAuthGuard)
  search(@Query('query') query: string) {
    return this.cardsRepository.search(query);
  }

  @Get('/:id/reviews')
  @UseGuards(JwtAuthGuard)
  filterReviews(@Param('id') id: string, @Query('type') typeOfReview: string) {
    return this.cardsRepository.filterReviews(id, typeOfReview);
  }
}
