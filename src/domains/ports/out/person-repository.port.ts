import { AwardEntity } from 'src/domains/entities/award.entity';
import { Genres } from 'src/domains/entities/genges.entity';
import { PersonEntity } from 'src/domains/entities/person.entity';

export interface CreatePersonDto {
  readonly name: string;
  readonly englishName: string;
  readonly linkToBiography: string;
  readonly career: string[];
  readonly height: string;
  readonly birthday: string[];
  readonly bornPlace: string;
  genres: Genres[];
  readonly totalCountOfFilmsAndYears: string[];
  readonly favorites: number;
  readonly awards: string[];
  readonly bestFilms: string[];
  readonly lastNews: string[];
  readonly photos: string[];
  readonly films: string[];
  readonly comments: string[];
}

export interface PersonsRepositoryPort {
  delete(PersonId: string);
  getOneById(id: string);
  loadPerson(personId: string);
  update(person: PersonEntity);
  getAll();
  create(dto: CreatePersonDto);
  search(query: string);
}
