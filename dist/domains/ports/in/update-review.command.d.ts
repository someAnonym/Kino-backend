export declare class UpdateReviewCommand {
    private readonly _reviewId;
    private readonly _likes;
    private readonly _dislikes;
    private readonly _comments;
    constructor(_reviewId: string, _likes: number, _dislikes: number, _comments: string[]);
    get reviewId(): string;
    get likes(): number;
    get dislikes(): number;
    get comments(): string[];
}
