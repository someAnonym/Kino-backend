import { UserEntity } from './user.entity';
export declare class CommentEntity {
    private readonly _id;
    private readonly _user;
    private readonly _likes;
    private readonly _dislikes;
    private readonly _title;
    private readonly _date;
    private readonly _text;
    private readonly _comments;
    private readonly _link;
    private readonly _complaint;
    private readonly _answer?;
    constructor(_id: string, _user: UserEntity, _likes: number, _dislikes: number, _title: string, _date: Date, _text: string, _comments: CommentEntity[], _link: string, _complaint: string, _answer?: string);
    get id(): string;
    get user(): UserEntity;
    get likes(): number;
    get dislikes(): number;
    get title(): string;
    get date(): Date;
    get text(): string;
    get comments(): CommentEntity[];
    get link(): string;
    get complaint(): string;
    get answer(): string;
}
