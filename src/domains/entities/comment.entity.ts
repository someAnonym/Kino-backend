import { UserEntity } from './user.entity';

export class CommentEntity {
  constructor(
    private readonly _id: string,
    private readonly _user: string,
    private _likes: number,
    private _dislikes: number,
    private _date: Date,
    private _text: string,
    private _comments: string[],
    private _complaints: string[],
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
    try {
      return (this._comments = [...this._comments, ...comments]);
    } catch (error) {
      console.warn('Ошибка при изменении комментариев комментария', error);
    }
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

  public getCommentData() {
    return {
      id: this._id,
      user: this._user,
      likes: this._likes,
      dislikes: this._dislikes,
      date: this._date,
      text: this._text,
      comments: this._comments,
      complaints: this._complaints,
    };
  }
}
