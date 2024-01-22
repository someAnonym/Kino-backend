/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateAwardOrmDto } from './dto/create-award.dto';
import { Model } from 'mongoose';
import { Award, AwardDocument } from './entities/award.entity';
import { AwardRepositoryPort } from 'src/domains/ports/out/award-repository.port';
export declare class AwardsRepository implements AwardRepositoryPort {
    private repository;
    constructor(repository: Model<AwardDocument>);
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, AwardDocument> & Award & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, AwardDocument> & Award & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, AwardDocument, "find">;
    create(dto: CreateAwardOrmDto): Promise<import("mongoose").Document<unknown, {}, AwardDocument> & Award & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteAward(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, AwardDocument> & Award & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, AwardDocument> & Award & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, AwardDocument, "findOneAndDelete">;
    getOneById(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, AwardDocument> & Award & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, AwardDocument> & Award & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, AwardDocument, "findOne">;
}
