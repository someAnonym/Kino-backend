import { PersonEntity } from 'src/domains/entities/person.entity';
import { Person } from './entities/person-orm.entity';
import { ObjectId } from 'mongodb';

type PersonData = { _id: ObjectId } & Person;

export class PersonMapper {
  static mapToDomain(person: PersonData): PersonEntity {
    const id = person._id.valueOf() as string;
    const films = person.films.map((i) => i.valueOf() as string);
    const bestFilms = person.films.map((i) => i.valueOf() as string);
    const awards = person.awards.map((i) => i.valueOf() as string);
    const comments = person.comments.map((i) => i.valueOf() as string);

    return new PersonEntity(
      id,
      person.name,
      person.avatarImage,
      person.englishName,
      person.linkToBiography,
      person.career,
      person.height,
      person.birthday,
      person.bornPlace,
      person.genres,
      person.totalCountOfFilmsAndYears,
      person.favorites,
      awards,
      bestFilms,
      person.lastNews,
      person.photos,
      films,
      comments,
    );
  }
}
