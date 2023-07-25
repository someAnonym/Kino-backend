import { Genres } from 'src/modules/users/entities/genges.entity';
export declare class CreatePersonOrmDto {
    name: string;
    englishName: string;
    linkToBiography: string;
    career: string[];
    height: string;
    birthday: string[];
    bornPlace: string;
    genres: Genres[];
    totalCountOfFilmsAndYears: string[];
    favorites: number;
    awards: string[];
    bestFilms: string[];
    lastNews: string[];
    photos: string[];
    films: string[];
    comments: string[];
}
