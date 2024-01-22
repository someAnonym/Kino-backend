export declare class RatingEntity {
    private readonly _id;
    private readonly _rate;
    private readonly _whoose;
    constructor(_id: string, _rate: string, _whoose: string);
    get id(): string;
    get rate(): string;
    get whoose(): string;
}
