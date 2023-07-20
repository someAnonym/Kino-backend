import { CommentEntity } from './comment.entity';
import { UserEntity } from './user.entity';

export class ReviewEntity {
  constructor(
    private readonly _id: string,
    private readonly _user: UserEntity,
    private readonly _typeOfReview: string,
    private readonly _likes: number,
    private readonly _dislikes: number,
    private readonly _title: string,
    private readonly _date: Date,
    private readonly _text: string,
    private readonly _comments: CommentEntity[],
    private readonly _link: string,
    private readonly _complaint: string,
    private readonly _answer?: string,
  ) {}

  public get id(): string {
    return this._id;
  }

  public get user(): UserEntity {
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
  public get comments(): CommentEntity[] {
    return this._comments;
  }

  public get link(): string {
    return this._link;
  }

  public get complaint(): string {
    return this._complaint;
  }

  public get answer(): string {
    return this?._answer;
  }
}
