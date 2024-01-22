export class QuoteEntity {
  constructor(
    private readonly _id: string,
    private readonly _text: string,
    private readonly _whoseText: string,
  ) {}

  public get id(): string {
    return this._id;
  }

  public get text(): string {
    return this._text;
  }

  public get whoseText(): string {
    return this._whoseText;
  }
}
