export class UpdateCardCommand {
  constructor(
    private readonly _cardId: string,
    private readonly _reviews: string[],
    private readonly _likes: number,
    private readonly _dislikes: number,
    private readonly _favorites: number,
  ) {}

  public get cardId(): string {
    return this._cardId;
  }

  public get favorites(): number {
    return this._favorites;
  }

  public get reviews(): string[] {
    return this._reviews;
  }

  public get likes(): number {
    return this._likes;
  }

  public get dislikes(): number {
    return this._dislikes;
  }
}
