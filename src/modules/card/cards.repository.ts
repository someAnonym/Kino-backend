import { ForbiddenException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CardMapper } from './card.mapper';
import { CardEntity } from 'src/domains/entities/card.entity';
import { CardRepositoryPort, CreateCardDto } from 'src/domains/ports/out/card-repository.port';
import { Card, CardDocument } from './entities/card-orm.entity';
import { CreateCardOrmDto } from './dto/create-card.dto';
import { ObjectId } from 'mongodb';

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

      currentCard.reviews = updatedCard.reviews.map((i) => new ObjectId(i));
      currentCard.userLike = updatedCard.userLike;
      currentCard.userDislike = updatedCard.userDislike;
      currentCard.favorites = updatedCard.favourites;

      return this.repository.findOneAndUpdate(currentCard._id, currentCard);
    } catch (error) {
      throw new ForbiddenException('Ошибка при обновлении Карточки', error);
    }
  }

  create(dto: CreateCardOrmDto) {
    return this.repository.create(dto);
  }

  findById(id: string) {
    return this.repository.findById(id);
  }

  async search(query: string) {
    const cards = await this.repository.find();
    return [
      ...cards.filter((i) => i.name.toLowerCase().includes(query.toLowerCase())),
      ...cards.filter((i) => i.secondName.toLowerCase().includes(query.toLowerCase())),
    ];
  }
}
