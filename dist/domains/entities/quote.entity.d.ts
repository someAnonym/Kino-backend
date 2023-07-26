export declare class QuoteEntity {
    private readonly _id;
    private readonly _picture;
    private readonly _text;
    private readonly _whoseText;
    constructor(_id: string, _picture: string, _text: string, _whoseText: string);
    get id(): string;
    get picture(): string;
    get text(): string;
    get whoseText(): string;
}
