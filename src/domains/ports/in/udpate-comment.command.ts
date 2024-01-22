export class UpdateCommentCommand {
  constructor(
    private readonly _commentId: string,
    private readonly _comments: string[],
    private readonly _likes: number,
    private readonly _dislikes: number,
  ) {}

  get commentId(): string {
    return this._commentId;
  }

  get comments(): string[] {
    return this._comments;
  }

  get likes(): number {
    return this._likes;
  }

  get dislikes(): number {
    return this._dislikes;
  }
}
