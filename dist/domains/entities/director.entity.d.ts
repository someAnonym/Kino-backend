export declare class DirectorEntity {
    private readonly _id;
    private readonly _name;
    private readonly _secondName;
    private readonly _picture;
    constructor(_id: string, _name: string, _secondName: string, _picture: string);
    get id(): string;
    get name(): string;
    get secondName(): string;
    get picture(): string;
}
