export declare class RatingEntity {
    private readonly _id;
    private readonly _rate;
    private readonly _whoose;
    constructor(_id: string, _rate: number, _whoose: string);
    get id(): string;
    get rate(): number;
    get whoose(): string;
}
