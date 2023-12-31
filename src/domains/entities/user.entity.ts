import { CardEntity } from './card.entity';
import { CommentEntity } from './comment.entity';
import { Genres } from './genges.entity';
import { PersonEntity } from './person.entity';
import { ReviewEntity } from './review.entity';

const USER_CONFIG = {
  password: {
    minLength: 6,
    maxLength: 24,
  },
  email: {
    minLength: 8,
  },
  avatar: {
    dir: '/uploads/',
  },
};

export class UserEntity {
  constructor(
    private readonly _id: string,
    // first
    private _email: string,
    private _password: string,
    private _name: string,
    private _secondName: string,
    private _vk: string,
    private _instagram: string,
    private _youtube: string,
    private _twitter: string,
    private _facebook: string,
    private _aboutMe: string,
    private _gender: string,
    private _birthday: string,
    private _country: string,
    private _city: string,
    private _favoriteGenres: Genres[],
    // second
    private readonly _films: string[],
    private readonly _friends: string[],
    private readonly _favoriteFilms: string[],
    private readonly _expecredFilms: string[],
    private readonly _persons: string[],
    private readonly _favoritePersons: string[],
    private _reviews: string[],
    private _comments: string[],
    // third
    private _likedFilms: string[],
    private _dislikedFilms: string[],
    private _avatarImage?: string,
    private _wasOnline?: Date,
  ) {}

  get id(): string {
    return this._id;
  }

  public get email(): string {
    return this._email;
  }

  public get password(): string {
    return this._password;
  }

  public get name(): string {
    return this._name;
  }

  public get secondName(): string {
    return this._secondName;
  }

  public get vk(): string {
    return this._vk;
  }

  public get instagram(): string {
    return this._instagram;
  }

  public get youtube(): string {
    return this._youtube;
  }

  public get twitter(): string {
    return this._twitter;
  }

  public get facebook(): string {
    return this._facebook;
  }

  public get aboutMe(): string {
    return this._aboutMe;
  }

  public get gender(): string {
    return this._gender;
  }

  public get birthday(): string {
    return this._birthday;
  }

  public get country(): string {
    return this._country;
  }

  public get city(): string {
    return this._city;
  }

  public get favoriteGenres(): Genres[] {
    return this._favoriteGenres;
  }

  public get films(): string[] {
    return this._films;
  }

  public get friends(): string[] {
    return this._friends;
  }

  public get favoriteFilms(): string[] {
    return this._favoriteFilms;
  }

  public get expectedFilms(): string[] {
    return this._expecredFilms;
  }
  public get persons(): string[] {
    return this._persons;
  }

  public get favoritePersons(): string[] {
    return this._favoritePersons;
  }

  public get reviews(): string[] {
    return this._reviews;
  }

  public get comments(): string[] {
    return this._comments;
  }

  public get likedFilms(): string[] {
    return this._likedFilms;
  }

  public get dislikedFilms(): string[] {
    return this._dislikedFilms;
  }

  public get avatarImage(): string {
    return this?._avatarImage;
  }

  public get wasOnline(): Date {
    return this?._wasOnline;
  }

  public getUserData() {
    return {
      id: this._id,
      email: this._email,
      password: this._password,
      name: this._name,
      secondName: this._secondName,
      vk: this._vk,
      instagram: this._instagram,
      facebook: this._facebook,
      youtube: this._youtube,
      twitter: this._twitter,
      aboutMe: this._aboutMe,
      gender: this._gender,
      birthday: this._birthday,
      country: this._country,
      city: this._city,
      favoriteGenres: this._favoriteGenres,
      favoriteFilms: this._favoriteFilms,
      films: this._films,
      friends: this._friends,
      expectedFilms: this._expecredFilms,
      persons: this._persons,
      favoritePersons: this._favoritePersons,
      reviews: this._reviews,
      comments: this._comments,
      likedFilms: this._likedFilms,
      dislikedfilms: this._dislikedFilms,
      avatarImage: this._avatarImage,
      wasOnline: this._wasOnline,
    };
  }

  public updateGender(gender: string): void | never {
    try {
      this._gender = gender;
    } catch (error) {
      throw new Error('Слишком мало символов!');
    }
  }

  public updateBirthday(birthday: string): void | never {
    if (birthday.length >= 5) {
      this._birthday = birthday;
    } else {
      throw new Error('Слишком мало символов!');
    }
  }

  public updateCity(city: string): void | never {
    try {
      this._city = city;
    } catch (err) {
      throw new Error('Слишком мало символов!');
    }
  }

  public updateCountry(country: string): void | never {
    try {
      this._country = country;
    } catch (err) {
      throw new Error('Слишком мало символов!');
    }
  }

  public updateAboutMe(about: string): void | never {
    if (about.length >= 5) {
      this._aboutMe = about;
    } else {
      throw new Error('Слишком мало символов!');
    }
  }

  public updateName(name: string): void | never {
    if (name.length >= 2 && !name.includes('!')) {
      this._name = name;
    } else {
      throw new Error('Слишком мало символов!');
    }
  }

  public updateSecondName(secondName: string): void | never {
    if (secondName.length >= 4 && !secondName.includes('!')) {
      this._secondName = secondName;
    } else {
      throw new Error('Слишком мало символов!');
    }
  }

  public updateVk(vk: string): void | never {
    if (vk.includes('vk.com')) {
      this._vk = vk;
    } else {
      throw new Error('Неверный тип ссылки');
    }
  }

  public updateInstagram(instagram: string): void | never {
    if (instagram.includes('instagram.com')) {
      this._instagram = instagram;
    } else {
      throw new Error('Неверный тип ссылки');
    }
  }

  public updateTwitter(twitter: string): void | never {
    if (twitter.includes('twitter.com')) {
      this._twitter = twitter;
    } else {
      throw new Error('Неверный тип ссылки');
    }
  }

  public updateYoutube(youtube: string): void | never {
    if (youtube.includes('youtube.com')) {
      this._youtube = youtube;
    } else {
      throw new Error('Неверный тип ссылки');
    }
  }

  public updateFacebook(facebook: string): void | never {
    if (facebook.includes('facebook.com')) {
      this._facebook = facebook;
    } else {
      throw new Error('Неверный тип ссылки');
    }
  }

  public updatePassword(password: string): void | never {
    if (this._validateUserPassword(password)) {
      this._password = password;
    } else {
      throw new Error('Новый пароль не валиден');
    }
  }

  public updateUserEmail(email: string): void | never {
    if (this._validateUserEmail(email)) {
      this._email = email;
    } else {
      throw new Error('Новый email не валиден');
    }
  }

  public updateUserAvatar(avatar: string): void | never {
    if (this._validateUserAvatar(avatar)) {
      this._avatarImage = avatar;
    } else {
      throw new Error('Новый аватар не валиден');
    }
  }

  private _validateUserEmail(email: string): boolean {
    const isEmailLengthValid = email.length >= USER_CONFIG.email.minLength;
    const isEmailTruthy = email.match(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    );

    return isEmailTruthy && isEmailLengthValid;
  }

  private _validateUserPassword(password: string): boolean {
    const isPasswordAnother = password !== this._password;
    const isPasswordLengthValid =
      password.length >= USER_CONFIG.password.minLength &&
      password.length <= USER_CONFIG.password.maxLength;

    const isSpacesInPassword = [...password].includes(' ');

    return isPasswordAnother && isPasswordLengthValid && !isSpacesInPassword;
  }

  private _validateUserAvatar(avatar: string): boolean {
    const isAvatarInRightDir = avatar.includes(USER_CONFIG.avatar.dir);

    return isAvatarInRightDir;
  }
}
