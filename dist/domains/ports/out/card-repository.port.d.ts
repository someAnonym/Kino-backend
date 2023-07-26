import { CardEntity } from 'src/domains/entities/card.entity';
import { Genres } from 'src/domains/entities/genges.entity';
export interface CreateCardDto {
    posterImage: string;
    name: string;
    secondName: string;
    ratings: string[];
    userLike: number;
    userDislike: number;
    favourites: number;
    year: string;
    country: string;
    slogan: string;
    directors: string[];
    screenwriters: string[];
    producers: string[];
    operators: string[];
    composers: string[];
    artists: string[];
    editors: string[];
    genres: Genres[];
    collecting: number;
    premiereInWorld: string;
    premiereInRussia: string;
    age: number;
    duration: number;
    production: string[];
    specialEffects: string[];
    dubbingStudios: string[];
    persons: string[];
    trailers: string[];
    awards: string[];
    posters: string[];
    shots: string[];
    sequelAndPrequels: string[];
    quotes: string[];
    seemFilms: string[];
    description: string;
}
export interface CardRepositoryPort {
    updateCard(card: CardEntity): any;
    loadCard(cardId: string): Promise<CardEntity>;
    findById(id: string): any;
    create(dto: CreateCardDto): any;
    search(query: string): any;
}
