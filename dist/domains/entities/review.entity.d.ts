export declare class ReviewEntity {
    private readonly _id;
    private readonly _user;
    private readonly _typeOfReview;
    private _likes;
    private _dislikes;
    private readonly _title;
    private readonly _date;
    private readonly _text;
    private _comments;
    private readonly _complaints;
    constructor(_id: string, _user: string, _typeOfReview: string, _likes: number, _dislikes: number, _title: string, _date: Date, _text: string, _comments: string[], _complaints: string[]);
    get id(): string;
    get user(): string;
    get typeOfReview(): string;
    get likes(): number;
    get dislikes(): number;
    get title(): string;
    get date(): Date;
    get text(): string;
    get comments(): string[];
    get complaints(): string[];
    getReviewData(): {
        id: string;
        user: string;
        typeOfReview: string;
        likes: number;
        dislikes: number;
        title: string;
        date: Date;
        text: string;
        comments: string[];
        complaints: string[];
    };
    updateLikes(likes: number): void | never;
    updateDislikes(dislikes: number): void;
    updateComments(comments: string[]): void;
}
