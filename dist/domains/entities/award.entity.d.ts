export declare class AwardEntity {
    private readonly _id;
    private readonly _picture;
    private readonly _name;
    private readonly _description;
    private readonly _year;
    constructor(_id: string, _picture: string, _name: string, _description: string, _year: string);
    get id(): string;
    get picture(): string;
    get name(): string;
    get description(): string;
    get year(): string;
}
