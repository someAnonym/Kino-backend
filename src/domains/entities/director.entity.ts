export class DirectorEntity {
  constructor(
    private readonly _id: string,
    private readonly _name: string,
    private readonly _secondName: string,
    private readonly _picture: string,
  ) {}

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get secondName(): string {
    return this._secondName;
  }

  public get picture(): string {
    return this._picture;
  }
}
