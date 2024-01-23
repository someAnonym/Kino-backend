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
    private _favoriteGenres: string[],
    // second
    private _friends: string[],
    private _favoriteFilms: string[],
    private _persons: string[],
    private _reviews: string[],
    private _comments: string[],

    // third
    private _likedFilms: string[],
    private _dislikedFilms: string[],
    private _likedComments: string[],
    private _dislikedComments: string[],
    private _likedReviews: string[],
    private _dislikedReviews: string[],
    private _avatarImage?: string,
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

  public get favoriteGenres(): string[] {
    return this._favoriteGenres;
  }

  public get friends(): string[] {
    return this._friends;
  }

  public get favoriteFilms(): string[] {
    return this._favoriteFilms;
  }

  public get persons(): string[] {
    return this._persons;
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

  public get likedComments(): string[] {
    return this._likedComments;
  }
  public get dislikedComments(): string[] {
    return this._dislikedComments;
  }
  public get likedReviews(): string[] {
    return this._likedReviews;
  }
  public get dislikedReviews(): string[] {
    return this._dislikedReviews;
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
      friends: this._friends,
      persons: this._persons,
      reviews: this._reviews,
      comments: this._comments,
      likedFilms: this._likedFilms,
      dislikedFilms: this._dislikedFilms,
      likedComments: this._likedComments,
      dislikedComments: this._dislikedComments,
      likedReviews: this._likedReviews,
      dislikedReviews: this._dislikedReviews,
      avatarImage: this._avatarImage,
    };
  }

  public updateFriends(friends: string[]): void | never {
    try {
      this._friends = [...this._friends, ...friends];
    } catch (error) {
      throw new Error('Ошибка при обновлении количества друзей!');
    }
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

  public updateGenres(genres: string[]): void | never {
    try {
      this._favoriteGenres = genres;
    } catch (err) {
      throw new Error('Ошибка при обновлении жанров!');
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

  public updatePersons(person: string): void | never {
    if (person) {
      if (!this._persons.includes(person)) {
        this._persons = [...this._persons, person];
      } else {
        this._persons = this._persons.filter((i) => i !== person);
      }
    }
  }

  public updateFavoriteFilms(favoriteFilm: string): void | never {
    if (favoriteFilm) {
      if (!this._favoriteFilms.includes(favoriteFilm)) {
        this._favoriteFilms = [...this._favoriteFilms, favoriteFilm];
      } else {
        this._favoriteFilms = this._favoriteFilms.filter((i) => i !== favoriteFilm);
      }
    }
  }

  public updateLikedFilms(likedFilm: string): void | never {
    if (likedFilm) {
      if (!this._likedFilms.includes(likedFilm)) {
        this._likedFilms = [...this._likedFilms, likedFilm];
      } else {
        this._likedFilms = this._likedFilms.filter((i) => i !== likedFilm);
      }
    }
  }

  public updateDislikedFilms(dislikedFilm: string): void | never {
    if (dislikedFilm) {
      if (!this._dislikedFilms.includes(dislikedFilm)) {
        this._dislikedFilms = [...this._dislikedFilms, dislikedFilm];
      } else {
        this._dislikedFilms = this._dislikedFilms.filter((i) => i !== dislikedFilm);
      }
    }
  }

  public updateLikedComments(likedComment: string): void | never {
    if (likedComment) {
      if (!this._likedComments.includes(likedComment)) {
        this._likedComments = [...this._likedComments, likedComment];
      } else {
        this._likedComments = this._likedComments.filter((i) => i !== likedComment);
      }
    }
  }

  public updateDislikedComments(dislikedComment: string): void | never {
    if (dislikedComment) {
      if (!this._dislikedComments.includes(dislikedComment)) {
        this._dislikedComments = [...this._dislikedComments, dislikedComment];
      } else {
        this._dislikedComments = this._dislikedComments.filter((i) => i !== dislikedComment);
      }
    }
  }

  public updateLikedReviews(likedReview: string): void | never {
    if (likedReview) {
      if (!this._likedReviews.includes(likedReview)) {
        this._likedReviews = [...this._likedReviews, likedReview];
      } else {
        this._likedReviews = this._likedReviews.filter((i) => i !== likedReview);
      }
    }
  }

  public updateDislikedReviews(dislikedReview: string): void | never {
    if (dislikedReview) {
      if (!this._dislikedReviews.includes(dislikedReview)) {
        this._dislikedReviews = [...this._dislikedReviews, dislikedReview];
      } else {
        this._dislikedReviews = this._dislikedReviews.filter((i) => i !== dislikedReview);
      }
    }
  }

  private _validateUserEmail(email: string): boolean {
    const isEmailLengthValid = email.length >= USER_CONFIG.email.minLength;
    const isEmailTruthy = email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);

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
