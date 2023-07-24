export class AwardEntity {
  constructor(
    private readonly _id: string,
    private readonly _picture: string,
    private readonly _name: string,
    private readonly _description: string,
    private readonly _year: string,
  ) {}

  public get id(): string {
    return this._id;
  }

  public get picture(): string {
    return this._picture;
  }

  public get name(): string {
    return this._name;
  }

  public get description(): string {
    return this._description;
  }

  public get year(): string {
    return this._year;
  }
}
