export declare class QuoteEntity {
    private readonly _id;
    private readonly _text;
    private readonly _whoseText;
    constructor(_id: string, _text: string, _whoseText: string);
    get id(): string;
    get text(): string;
    get whoseText(): string;
}
