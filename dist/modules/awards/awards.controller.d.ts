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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AwardsRepository } from './awards.repository';
import { CreateAwardOrmDto } from './dto/create-award.dto';
export declare class AwardsController {
    private readonly _awardsRepository;
    constructor(_awardsRepository: AwardsRepository);
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./entities/award.entity").AwardDocument> & import("./entities/award.entity").Award & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("./entities/award.entity").AwardDocument> & import("./entities/award.entity").Award & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/award.entity").AwardDocument, "find">;
    create(dto: CreateAwardOrmDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/award.entity").AwardDocument> & import("./entities/award.entity").Award & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./entities/award.entity").AwardDocument> & import("./entities/award.entity").Award & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./entities/award.entity").AwardDocument> & import("./entities/award.entity").Award & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/award.entity").AwardDocument, "findOneAndDelete">;
    getAward(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./entities/award.entity").AwardDocument> & import("./entities/award.entity").Award & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./entities/award.entity").AwardDocument> & import("./entities/award.entity").Award & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/award.entity").AwardDocument, "findOne">;
}
