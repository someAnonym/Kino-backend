export class UpdateUserCommand {
  constructor(
    private readonly _userId: string,
    private _email: string,
    private _name: string,
    private _secondName: string,
    private _vk: string,
    private _instagram: string,
    private _youtube: string,
    private _twitter: string,
    private _facebook: string,
    private _aboutMe: string,
    private _avatarImage: string,
    private _gender: string,
    private _birthday: string,
    private _country: string,
    private _city: string,
    private _favoriteGenres: string[],
    private _person: string,
  ) {}

  public get userId(): string {
    return this._userId;
  }

  public get email(): string {
    return this._email;
  }

  public get favoriteGenres(): string[] {
    return this._favoriteGenres;
  }

  public get avatarImage(): string {
    return this._avatarImage;
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

  public get city(): string {
    return this._city;
  }

  public get country(): string {
    return this._country;
  }

  public get gender(): string {
    return this._gender;
  }

  public get birthday(): string {
    return this._birthday;
  }
  public get person(): string {
    return this._person;
  }
}
