import { ForbiddenException, Injectable, RequestTimeoutException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CardMapper } from './card.mapper';
import { CardEntity } from 'src/domains/entities/card.entity';
import { CardRepositoryPort, CreateCardDto } from 'src/domains/ports/out/card-repository.port';
import { Card, CardDocument } from './entities/card-orm.entity';
import { CreateCardOrmDto } from './dto/create-card.dto';
import { ObjectId } from 'mongodb';
import { ReviewsRepository } from '../reviews/reviews.repository';

@Injectable()
export class CardsRepository implements CardRepositoryPort {
  constructor(
    @InjectModel(Card.name)
    private repository: Model<CardDocument>,

    private reviewsRepository: ReviewsRepository,
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

      await currentCard.save();
      return currentCard;
    } catch (error) {
      console.log(error);
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

  async filterReviews(cardId: string, typeOfReview: string) {
    const card = await this.repository.findById(cardId);
    const reviews = this.reviewsRepository.getAll().populate('user');
    const filter = (await reviews).filter(
      (i) => i.typeOfReview === typeOfReview && card.reviews.includes(i._id),
    );
    return filter;
  }
}
