export declare class UpdatePersonCommand {
    private readonly _personId;
    private readonly _comments;
    constructor(_personId: string, _comments: string[]);
    get personId(): string;
    get comments(): string[];
}
