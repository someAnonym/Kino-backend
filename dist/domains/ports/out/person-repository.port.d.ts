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
    delete(PersonId: string): any;
    getOneById(id: string): any;
    loadPerson(personId: string): any;
    update(person: PersonEntity): any;
    getAll(): any;
    create(dto: CreatePersonDto): any;
    search(query: string): any;
}
