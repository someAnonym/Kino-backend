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
import { UpdateReviewUseCase } from 'src/domains/ports/in/update-review.use-case';
import { ReviewsRepository } from './reviews.repository';
import { CreateReviewOrmDto } from './dto/create-review.dto';
import { UpdateReviewOrmDto } from './dto/update-review.dto';
export declare class ReviewController {
    private readonly _updateReviewUseCase;
    private readonly _reviewsRepository;
    constructor(_updateReviewUseCase: UpdateReviewUseCase, _reviewsRepository: ReviewsRepository);
    getAll(): import("mongoose").Query<Omit<import("mongoose").Document<unknown, {}, import("./entities/review-orm.entity").ReviewDocument> & import("./entities/review-orm.entity").Review & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[], import("mongoose").Document<unknown, {}, import("./entities/review-orm.entity").ReviewDocument> & import("./entities/review-orm.entity").Review & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/review-orm.entity").ReviewDocument, "find">;
    getOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./entities/review-orm.entity").ReviewDocument> & import("./entities/review-orm.entity").Review & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./entities/review-orm.entity").ReviewDocument> & import("./entities/review-orm.entity").Review & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/review-orm.entity").ReviewDocument, "findOne">;
    create(dto: CreateReviewOrmDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/review-orm.entity").ReviewDocument> & import("./entities/review-orm.entity").Review & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, dto: UpdateReviewOrmDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/review-orm.entity").ReviewDocument> & import("./entities/review-orm.entity").Review & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./entities/review-orm.entity").ReviewDocument> & import("./entities/review-orm.entity").Review & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./entities/review-orm.entity").ReviewDocument> & import("./entities/review-orm.entity").Review & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/review-orm.entity").ReviewDocument, "findOneAndDelete">;
}
