import { CommentEntity } from './comment.entity';
import { ReviewEntity } from './review.entity';

export class NewsEntity {
  constructor(
    // preview
    private readonly _id: string,
    private readonly _title: string,
    private readonly _date: Date,
    private readonly _looks: number,
    private readonly _comments: CommentEntity[],
    private readonly _picture: string,
    // main
    private readonly _text: string,
  ) {}

  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this._title;
  }

  public get date(): Date {
    return this._date;
  }

  public get looks(): number {
    return this._looks;
  }

  public get comments(): CommentEntity[] {
    return this._comments;
  }

  public get picture(): string {
    return this._picture;
  }

  public get text(): string {
    return this._text;
  }
}
