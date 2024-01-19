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
import { RatingsRepository } from './ratings.repository';
import { CreateRatingOrmDto } from './dto/create-rating-orm.dto';
export declare class RatingsController {
    private readonly _ratingsRepository;
    constructor(_ratingsRepository: RatingsRepository);
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./entities/rating-orm.entity").RatingDocument> & import("./entities/rating-orm.entity").Rating & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("./entities/rating-orm.entity").RatingDocument> & import("./entities/rating-orm.entity").Rating & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/rating-orm.entity").RatingDocument, "find">;
    getOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./entities/rating-orm.entity").RatingDocument> & import("./entities/rating-orm.entity").Rating & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./entities/rating-orm.entity").RatingDocument> & import("./entities/rating-orm.entity").Rating & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/rating-orm.entity").RatingDocument, "findOne">;
    create(dto: CreateRatingOrmDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/rating-orm.entity").RatingDocument> & import("./entities/rating-orm.entity").Rating & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./entities/rating-orm.entity").RatingDocument> & import("./entities/rating-orm.entity").Rating & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./entities/rating-orm.entity").RatingDocument> & import("./entities/rating-orm.entity").Rating & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/rating-orm.entity").RatingDocument, "findOneAndDelete">;
}
