import { Body, Controller, Get, Inject, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CardId } from '../decorators/card-id.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UpdateCardDto } from './dto/update-card.dto';
import { UpdateCardCommand } from 'src/domains/ports/in/update-card.command';
import { CardsRepository } from './cards.repository';
import {
  UpdateCardUseCase,
  UpdateCardUseCaseSymbol,
} from 'src/domains/ports/in/update-card-use-case';
import { CreateCardDto } from 'src/domains/ports/out/card-repository.port';
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

  @Get('/currentCard')
  @UseGuards(JwtAuthGuard)
  getMe(@Body() id: string) {
    return this.cardsRepository.findById(id);
  }

  @Put('/update')
  @UseGuards(JwtAuthGuard)
  async update(@Body() id: string, @Body() dto: UpdateCardDto) {
    const command = new UpdateCardCommand(
      id,
      dto._reviews,
      dto._likes,
      dto._dislikes,
      dto._favorites,
    );
    const updateCard = await this._updateCardUseCase.UpdateCard(command);
    return await this.cardsRepository.updateCard(updateCard);
    // return (await this._updateUserUseCase.updateUser(command)).getUserData();
  }

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  async create(@Body() dto: CreateCardOrmDto) {
    return await this.cardsRepository.create(dto);
  }
}
