export class UpdatePersonCommand {
  constructor(private readonly _personId: string, private readonly _comments: string[]) {}

  public get personId(): string {
    return this._personId;
  }

  public get comments(): string[] {
    return this._comments;
  }
}
