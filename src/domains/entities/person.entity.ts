import { Genres } from './genges.entity';

export class PersonEntity {
  constructor(
    private readonly _id: string,
    private readonly _name: string,
    private readonly _englishName: string,
    private readonly _linkToBiography: string,
    private readonly _career: string[],
    private readonly _height: string,
    private readonly _birthday: string[],
    private readonly _bornPlace: string,
    private readonly _genres: Genres[],
    private readonly _totalCountOfFilmsAndYears: string[],
    private readonly _favorites: number,
    private readonly _awards: string[],
    private readonly _bestFilms: string[],
    private readonly _lastNews: string[],
    private readonly _photos: string[],
    private readonly _films: string[],
    private _comments: string[],
  ) {}

  public get id(): string {
    return this._id;
  }

  public get englishName(): string {
    return this._englishName;
  }

  public get linkToBiography(): string {
    return this._linkToBiography;
  }

  public get career(): string[] {
    return this._career;
  }

  public get height(): string {
    return this._height;
  }

  public get birthday(): string[] {
    return this._birthday;
  }

  public get bornPlace(): string {
    return this._bornPlace;
  }

  public get genres(): Genres[] {
    return this._genres;
  }
  public get totalCountOfFilmsAndYears(): string[] {
    return this._totalCountOfFilmsAndYears;
  }

  public get favorites(): number {
    return this._favorites;
  }

  public get awards(): string[] {
    return this._awards;
  }

  public get bestFilms(): string[] {
    return this._bestFilms;
  }

  public get lastNews(): string[] {
    return this._lastNews;
  }

  public get photos(): string[] {
    return this._photos;
  }

  public get films(): string[] {
    return this._films;
  }

  public get comments(): string[] {
    return this._comments;
  }

  public getData() {
    return {
      id: this._id,
      name: this._name,
      englishName: this._englishName,
      linkToBiography: this._linkToBiography,
      career: this._career,
      height: this._height,
      birthday: this._birthday,
      bornPlace: this._bornPlace,
      genres: this._genres,
      totalCountOfFilmsAndYears: this._totalCountOfFilmsAndYears,
      favorites: this._favorites,
      awards: this._awards,
      bestFilms: this._bestFilms,
      lastNews: this._lastNews,
      photos: this._photos,
      films: this._films,
      comments: this._comments,
    };
  }

  public updateComments(comments: string[]): void | never {
    try {
      this._comments = [...this._comments, ...comments];
    } catch (error) {
      throw new Error('Ошибка обновления комментариев!');
    }
  }
}
