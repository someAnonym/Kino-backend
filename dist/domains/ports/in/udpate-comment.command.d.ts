export declare class UpdateCommentCommand {
    private readonly _commentId;
    private readonly _comments;
    private readonly _likes;
    private readonly _dislikes;
    constructor(_commentId: string, _comments: string[], _likes: number, _dislikes: number);
    get commentId(): string;
    get comments(): string[];
    get likes(): number;
    get dislikes(): number;
}
