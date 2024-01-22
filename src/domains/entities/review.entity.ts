export class ReviewEntity {
  constructor(
    private readonly _id: string,
    private readonly _user: string,
    private readonly _typeOfReview: string,
    private _likes: number,
    private _dislikes: number,
    private readonly _title: string,
    private readonly _date: Date,
    private readonly _text: string,
    private _comments: string[],
    private readonly _complaints: string[],
  ) {}

  public get id(): string {
    return this._id;
  }

  public get user(): string {
    return this._user;
  }

  public get typeOfReview(): string {
    return this._typeOfReview;
  }

  public get likes(): number {
    return this._likes;
  }

  public get dislikes(): number {
    return this._dislikes;
  }

  public get title(): string {
    return this._title;
  }

  public get date(): Date {
    return this._date;
  }

  public get text(): string {
    return this._text;
  }
  public get comments(): string[] {
    return this._comments;
  }

  public get complaints(): string[] {
    return this._complaints;
  }

  public getReviewData() {
    return {
      id: this._id,
      user: this._user,
      typeOfReview: this._typeOfReview,
      likes: this._likes,
      dislikes: this._dislikes,
      title: this._title,
      date: this._date,
      text: this._text,
      comments: this._comments,
      complaints: this._complaints,
    };
  }

  public updateLikes(like: number): void | never {
    try {
      this._likes = this._likes + like;
    } catch (error) {
      throw new Error('Ошибка обновления лайков!');
    }
  }

  public updateDislikes(dislike: number): void | never {
    try {
      this._dislikes = this._dislikes + dislike;
    } catch (error) {
      throw new Error('Ошибка обновления лайков!');
    }
  }

  public updateComments(comments: string[]) {
    this._comments = [...this._comments, ...comments];
  }
}
