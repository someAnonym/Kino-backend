import { AwardEntity } from './award.entity';
import { DirectorEntity } from './director.entity';
import { Genres } from './genges.entity';
import { PersonEntity } from './person.entity';
import { QuoteEntity } from './quote.entity';

export class CardEntity {
  constructor(
    private readonly _id: string,
    // first
    private readonly _posterImage: string,
    private readonly _name: string,
    private readonly _secondName: string,
    private readonly _ratings: number[],
    private readonly _userLike: number,
    private readonly _userDislike: number,
    private readonly _favourites: string[],
    private readonly _year: string,
    private readonly _country: string,
    private readonly _slogan: string,
    private readonly _directors: DirectorEntity[],
    private readonly _screenwriters: string[],
    private readonly _producers: string[],
    private readonly _operators: string[],
    private readonly _composers: string[],
    private readonly _artists: string[],
    private readonly _editors: string[],
    private readonly _genres: Genres[],
    private readonly _collecting: number,
    private readonly _premiereInWorld: string,
    private readonly _premiereInRussia: string,
    private readonly _age: number,
    private readonly _duration: number,
    // second
    private readonly _production: string[],
    private readonly _specialEffects: string[],
    private readonly _dubbingStudios: string[],
    private readonly _persons: PersonEntity[],
    // third
    private readonly _trailers: string[],
    private readonly _awards: AwardEntity[],
    private readonly _posters: string[],
    private readonly _shots: string[],
    private readonly _sequelAndPrequels: CardEntity[],
    private readonly _quotes: QuoteEntity[],
    private readonly _seemFilms: CardEntity[],
  ) {}

  public id(): string {
    return this._id;
  }

  public posterImage(): string {
    return this._posterImage;
  }

  public name(): string {
    return this._name;
  }

  public secondName(): string {
    return this._secondName;
  }

  public ratings(): number[] {
    return this._ratings;
  }

  public userLike(): number {
    return this._userLike;
  }

  public userDislike(): number {
    return this._userDislike;
  }

  public favourites(): string[] {
    return this._favourites;
  }

  public year(): string {
    return this._year;
  }

  public country(): string {
    return this._country;
  }

  public slogan(): string {
    return this._slogan;
  }

  public directors(): DirectorEntity[] {
    return this._directors;
  }

  public screenwriters(): string[] {
    return this._screenwriters;
  }
  public producers(): string[] {
    return this._producers;
  }
  public operators(): string[] {
    return this._operators;
  }
  public composers(): string[] {
    return this._composers;
  }
  public artisrs(): string[] {
    return this._artists;
  }
  public editors(): string[] {
    return this._editors;
  }
  public genres(): Genres[] {
    return this._genres;
  }
  public collecting(): number {
    return this._collecting;
  }
  public premiereInWorld(): string {
    return this._premiereInWorld;
  }
  public premiereInRussia(): string {
    return this._premiereInRussia;
  }
  public age(): number {
    return this._age;
  }
  public duration(): number {
    return this._duration;
  }

  public production(): string[] {
    return this._production;
  }

  public specialEffects(): string[] {
    return this._specialEffects;
  }

  public dubbingStudios(): string[] {
    return this._dubbingStudios;
  }

  public persons(): PersonEntity[] {
    return this._persons;
  }

  public trailers(): string[] {
    return this._trailers;
  }

  public awards(): AwardEntity[] {
    return this._awards;
  }

  public posters(): string[] {
    return this._posters;
  }

  public shots(): string[] {
    return this._shots;
  }

  public sequelAndPrequels(): CardEntity[] {
    return this._sequelAndPrequels;
  }

  public quotes(): QuoteEntity[] {
    return this._quotes;
  }

  public seemFilms(): CardEntity[] {
    return this._seemFilms;
  }
}
