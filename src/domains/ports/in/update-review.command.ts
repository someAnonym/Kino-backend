export class UpdateReviewCommand {
  constructor(
    private readonly _reviewId: string,
    private readonly _likes: number,
    private readonly _dislikes: number,
    private readonly _comments: string[],
  ) {}

  public get reviewId(): string {
    return this._reviewId;
  }

  public get likes(): number {
    return this._likes;
  }

  public get dislikes(): number {
    return this._dislikes;
  }

  public get comments(): string[] {
    return this._comments;
  }
}
