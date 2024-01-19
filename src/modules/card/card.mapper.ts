import { UserEntity } from 'src/domains/entities/user.entity';
import { PersonEntity } from 'src/domains/entities/person.entity';
import { ObjectId } from 'mongodb';
import { Card } from './entities/card-orm.entity';
import { CardEntity } from 'src/domains/entities/card.entity';

type CardData = { _id: ObjectId } & Card;

export class CardMapper {
  static mapToDomain(card: CardData): CardEntity {
    const id = card._id.valueOf() as string;
    const sequelAndPrequels = card.sequelAndPrequels.map((i) => i.valueOf() as string);
    const seemFilms = card.seemFilms.map((i) => i.valueOf() as string);
    const awards = card.awards.map((i) => i.valueOf() as string);
    const reviews = card.reviews.map((i) => i.valueOf() as string);
    const persons = card.persons.map((i) => i.valueOf() as string);
    const quotes = card.quotes.map((i) => i.valueOf() as string);
    const ratings = card.ratings.map((i) => i.valueOf() as string);
    const directors = card.directors.map((i) => i.valueOf() as string);
    return new CardEntity(
      id,
      card.posterImage,
      card.backgroundImage,
      reviews,
      card.name,
      card.secondName,
      ratings,
      card.userLike,
      card.userDislike,
      card.favorites,
      card.year,
      card.country,
      card.slogan,
      directors,
      card.screenwriters,
      card.producers,
      card.operators,
      card.composers,
      card.artists,
      card.editors,
      card.genres,
      card.collecting,
      card.premiereInWorld,
      card.premiereInRussia,
      card.age,
      card.duration,
      card.production,
      card.specialEffects,
      card.dubbingStudios,
      persons,
      card.trailers,
      awards,
      card.posters,
      card.shots,
      sequelAndPrequels,
      quotes,
      seemFilms,
      card.description,
    );
  }
}
