import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domains/entities/user.entity';
import { UserRepositoryPort } from 'src/domains/ports/out/user-repository.port';
import { Model } from 'mongoose';
import { errorMonitor } from 'events';
import { InjectModel } from '@nestjs/mongoose';
import { CardMapper } from './card.mapper';
import { CardEntity } from 'src/domains/entities/card.entity';
import { CardRepositoryPort, CreateCardDto } from 'src/domains/ports/out/card-repository.port';
import { Card, CardDocument } from './entities/card-orm.entity';
import { CreateCardOrmDto } from './dto/create-card.dto';

@Injectable()
export class CardsRepository implements CardRepositoryPort {
  constructor(
    @InjectModel(Card.name)
    private repository: Model<CardDocument>,
  ) {}

  async loadCard(cardId: string): Promise<CardEntity> {
    const card = await this.repository.findById(cardId);

    return CardMapper.mapToDomain(card);
  }

  async updateCard(card: CardEntity) {
    try {
      const updatedCard = card.getCardData();
      const currentCard = await this.repository.findById(card.id);

      currentCard.reviews = updatedCard.reviews;
      currentCard.userLike = updatedCard.userLike;
      currentCard.userDislike = updatedCard.userDislike;
      currentCard.favorites = updatedCard.favourites;

      return this.repository.findOneAndUpdate(currentCard._id, currentCard);
    } catch (error) {
      throw new ForbiddenException('Ошибка при обновлении Карточки', error);
    }
  }

  create(dto: CreateCardOrmDto) {
    console.log(1);

    return this.repository.create(dto);
  }

  findById(id: string) {
    return this.repository.findById(id);
  }
}
