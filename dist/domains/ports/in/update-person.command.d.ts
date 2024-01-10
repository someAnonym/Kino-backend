export declare class UpdatePersonCommand {
    private readonly _personId;
    private readonly _favorites;
    private readonly _comments;
    constructor(_personId: string, _favorites: number, _comments: string[]);
    get personId(): string;
    get favorites(): number;
    get comments(): string[];
}
