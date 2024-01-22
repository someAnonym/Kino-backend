export declare class CommentEntity {
    private readonly _id;
    private readonly _user;
    private _likes;
    private _dislikes;
    private _date;
    private _text;
    private _comments;
    private _complaints;
    constructor(_id: string, _user: string, _likes: number, _dislikes: number, _date: Date, _text: string, _comments: string[], _complaints: string[]);
    get id(): string;
    get user(): string;
    get likes(): number;
    get dislikes(): number;
    get date(): Date;
    get text(): string;
    get comments(): string[];
    get complaints(): string[];
    updateComments(comments: string[]): string[];
    updateLikes(likes: number): number;
    updateDislikes(dislikes: number): number;
    getCommentData(): {
        id: string;
        user: string;
        likes: number;
        dislikes: number;
        date: Date;
        text: string;
        comments: string[];
        complaints: string[];
    };
}
