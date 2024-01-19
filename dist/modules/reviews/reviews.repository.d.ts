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
import { ReviewEntity } from 'src/domains/entities/review.entity';
import { CreateReviewDto, ReviewRepositoryPort } from 'src/domains/ports/out/review-repository.port';
import { Review, ReviewDocument } from './entities/review-orm.entity';
import { Model } from 'mongoose';
export declare class ReviewsRepository implements ReviewRepositoryPort {
    private repository;
    constructor(repository: Model<ReviewDocument>);
    loadReview(reviewId: string): Promise<ReviewEntity>;
    update(review: ReviewEntity): Promise<import("mongoose").Document<unknown, {}, ReviewDocument> & Review & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(reviewId: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, ReviewDocument> & Review & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, ReviewDocument> & Review & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, ReviewDocument, "findOneAndDelete">;
    getOneById(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, ReviewDocument> & Review & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, ReviewDocument> & Review & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, ReviewDocument, "findOne">;
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, ReviewDocument> & Review & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, ReviewDocument> & Review & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, ReviewDocument, "find">;
    create(dto: CreateReviewDto): Promise<import("mongoose").Document<unknown, {}, ReviewDocument> & Review & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
