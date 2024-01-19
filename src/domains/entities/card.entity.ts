import { AwardEntity } from './award.entity';
import { DirectorEntity } from './director.entity';
import { Genres } from './genges.entity';
import { PersonEntity } from './person.entity';
import { QuoteEntity } from './quote.entity';
import { RatingEntity } from './rating.entity';
import { ReviewEntity } from './review.entity';

export class CardEntity {
  constructor(
    private readonly _id: string,
    // first
    private readonly _posterImage: string,
    private readonly _backgroundImage: string,
    private _reviews: string[],
    private readonly _name: string,
    private readonly _secondName: string,
    private readonly _ratings: string[],
    private _userLike: number,
    private _userDislike: number,
    private _favourites: number,
    private readonly _year: number,
    private readonly _country: string[],
    private readonly _slogan: string,
    private readonly _directors: string[],
    private readonly _screenwriters: string[],
    private readonly _producers: string[],
    private readonly _operators: string[],
    private readonly _composers: string[],
    private readonly _artists: string[],
    private readonly _editors: string[],
    private readonly _genres: string[],
    private readonly _collecting: number,
    private readonly _premiereInWorld: string,
    private readonly _premiereInRussia: string,
    private readonly _age: number,
    private readonly _duration: number,
    // second
    private readonly _production: string[],
    private readonly _specialEffects: string[],
    private readonly _dubbingStudios: string[],
    private readonly _persons: string[],
    // third
    private readonly _trailers: string[],
    private readonly _awards: string[],
    private readonly _posters: string[],
    private readonly _shots: string[],
    private readonly _sequelAndPrequels: string[],
    private readonly _quotes: string[],
    private readonly _seemFilms: string[],
    private readonly _description: string,
  ) {}

  public get id(): string {
    return this._id;
  }

  public get description(): string {
    return this._description;
  }

  public get posterImage(): string {
    return this._posterImage;
  }

  public get name(): string {
    return this._name;
  }

  public get reviews(): string[] {
    return this._reviews;
  }

  public get backgroundImage(): string {
    return this._backgroundImage;
  }

  public get secondName(): string {
    return this._secondName;
  }

  public get ratings(): string[] {
    return this._ratings;
  }

  public get userLike(): number {
    return this._userLike;
  }

  public get userDislike(): number {
    return this._userDislike;
  }

  public get favourites(): number {
    return this._favourites;
  }

  public get year(): number {
    return this._year;
  }

  public get country(): string[] {
    return this._country;
  }

  public get slogan(): string {
    return this._slogan;
  }

  public get directors(): string[] {
    return this._directors;
  }

  public get screenwriters(): string[] {
    return this._screenwriters;
  }
  public get producers(): string[] {
    return this._producers;
  }
  public get operators(): string[] {
    return this._operators;
  }
  public get composers(): string[] {
    return this._composers;
  }
  public get artisrs(): string[] {
    return this._artists;
  }
  public get editors(): string[] {
    return this._editors;
  }
  public get genres(): string[] {
    return this._genres;
  }
  public get collecting(): number {
    return this._collecting;
  }
  public get premiereInWorld(): string {
    return this._premiereInWorld;
  }
  public get premiereInRussia(): string {
    return this._premiereInRussia;
  }
  public get age(): number {
    return this._age;
  }
  public get duration(): number {
    return this._duration;
  }

  public get production(): string[] {
    return this._production;
  }

  public get specialEffects(): string[] {
    return this._specialEffects;
  }

  public get dubbingStudios(): string[] {
    return this._dubbingStudios;
  }

  public get persons(): string[] {
    return this._persons;
  }

  public get trailers(): string[] {
    return this._trailers;
  }

  public get awards(): string[] {
    return this._awards;
  }

  public get posters(): string[] {
    return this._posters;
  }

  public get shots(): string[] {
    return this._shots;
  }

  public get sequelAndPrequels(): string[] {
    return this._sequelAndPrequels;
  }

  public get quotes(): string[] {
    return this._quotes;
  }

  public get seemFilms(): string[] {
    return this._seemFilms;
  }

  public updateFavorite(favorite: number): void | never {
    try {
      this._favourites = this._favourites + favorite;
    } catch (err) {
      throw new Error('Ошибка при изменении избранных!');
    }
  }

  public updateLikes(like: number): void | never {
    try {
      this._userLike = this._userLike + like;
    } catch (err) {
      throw new Error('Ошибка при изменении лайков!');
    }
  }

  public updateDislikes(dislike: number): void | never {
    try {
      this._userDislike = this._userDislike + dislike;
    } catch (err) {
      throw new Error('Ошибка при изменении дизлайков!');
    }
  }

  public updateReviews(reviews: string[]): void | never {
    try {
      this._reviews = [...this._reviews, ...reviews];
    } catch (err) {
      console.log(err);
      throw new Error('Ошибка при обновлении Рецензий!');
    }
  }

  public getCardData() {
    return {
      id: this._id,
      posterImage: this._posterImage,
      reviews: this._reviews,
      name: this._name,
      secondName: this._secondName,
      ratings: this._ratings,
      userLike: this._userLike,
      userDislike: this._userDislike,
      favourites: this._favourites,
      year: this._year,
      country: this._country,
      slogan: this._slogan,
      directors: this._directors,
      screenwriters: this._screenwriters,
      producers: this._producers,
      operators: this._operators,
      composers: this._composers,
      artists: this._artists,
      editors: this._editors,
      genres: this._genres,
      collecting: this._collecting,
      oremiereImWorld: this._premiereInWorld,
      premiereInRussia: this._premiereInRussia,
      age: this._age,
      duration: this.duration,
      production: this._production,
      specialEffects: this._specialEffects,
      dubbingStudios: this._dubbingStudios,
      persons: this._persons,
      trailers: this._trailers,
      awards: this._awards,
      posters: this._posters,
      shots: this._shots,
      sequelAndPrequels: this._sequelAndPrequels,
      quotes: this._quotes,
      seemFilms: this._seemFilms,
      description: this._description,
    };
  }
}
