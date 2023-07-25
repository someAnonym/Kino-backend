import { Genres } from 'src/domains/entities/genges.entity';
import { PersonEntity } from 'src/domains/entities/person.entity';
export interface CreatePersonDto {
    readonly _id: string;
    readonly _name: string;
    readonly _englishName: string;
    readonly _linkToBiography: string;
    readonly _career: string[];
    readonly _height: string;
    readonly _birthday: string[];
    readonly _bornPlace: string;
    readonly _genres: Genres[];
    readonly _totalCountOfFilmsAndYears: string[];
    readonly _favorites: number;
    readonly _awards: string[];
    readonly _bestFilms: string[];
    readonly _lastNews: string[];
    readonly _photos: string[];
    readonly _films: string[];
    readonly _comments: string[];
}
export interface PersonRepositoryPort {
    delete(PersonId: string): any;
    getOneById(id: string): any;
    update(person: PersonEntity): any;
    getAll(): any;
    create(dto: CreatePersonDto): any;
}
