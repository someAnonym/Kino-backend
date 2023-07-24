export declare class UpdateCardCommand {
    private readonly _cardId;
    private readonly _reviews;
    private readonly _likes;
    private readonly _dislikes;
    private readonly _favorites;
    constructor(_cardId: string, _reviews: string[], _likes: number, _dislikes: number, _favorites: number);
    get cardId(): string;
    get favorites(): number;
    get reviews(): string[];
    get likes(): number;
    get dislikes(): number;
}
