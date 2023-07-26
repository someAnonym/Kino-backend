import { UserEntity } from './user.entity';

export class CommentEntity {
  constructor(
    private readonly _id: string,
    private readonly _user: string,
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

  public updateComments(comments: string[]): string[] {
    return (this._comments = [...this._comments, ...comments]);
  }

  public updateLikes(likes: number): number {
    return (this._likes = likes);
  }

  public updateDislikes(dislikes: number): number {
    return (this._dislikes = dislikes);
  }

  public getCommentData() {
    return {
      id: this._id,
      user: this._user,
      likes: this._likes,
      dislikes: this._dislikes,
      title: this._title,
      date: this._date,
      text: this._text,
      comments: this._comments,
      complaints: this._complaints,
    };
  }
}
