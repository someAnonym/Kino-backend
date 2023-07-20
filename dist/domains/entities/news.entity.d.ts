import { CommentEntity } from './comment.entity';
export declare class NewsEntity {
    private readonly _id;
    private readonly _title;
    private readonly _date;
    private readonly _looks;
    private readonly _comments;
    private readonly _picture;
    private readonly _text;
    constructor(_id: string, _title: string, _date: Date, _looks: number, _comments: CommentEntity[], _picture: string, _text: string);
    get id(): string;
    get title(): string;
    get date(): Date;
    get looks(): number;
    get comments(): CommentEntity[];
    get picture(): string;
    get text(): string;
}
