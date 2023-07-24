export class RatingEntity {
  constructor(
    private readonly _id: string,
    private readonly _rate: number,
    private readonly _whoose: string,
  ) {}

  public get id(): string {
    return this._id;
  }

  public get rate(): number {
    return this._rate;
  }

  public get whoose(): string {
    return this._whoose;
  }
}
