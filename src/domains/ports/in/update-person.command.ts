export class UpdatePersonCommand {
  constructor(
    private readonly _personId: string,
    private readonly _favorites: number,
    private readonly _comments: string[],
  ) {}

  public get personId(): string {
    return this._personId;
  }

  public get favorites(): number {
    return this._favorites;
  }

  public get comments(): string[] {
    return this._comments;
  }
}
