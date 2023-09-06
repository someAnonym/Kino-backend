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
import { Model } from 'mongoose';
import { CardEntity } from 'src/domains/entities/card.entity';
import { CardRepositoryPort } from 'src/domains/ports/out/card-repository.port';
import { Card, CardDocument } from './entities/card-orm.entity';
import { CreateCardOrmDto } from './dto/create-card.dto';
import { ReviewsRepository } from '../reviews/reviews.repository';
import { Review } from '../reviews/entities/review-orm.entity';
export declare class CardsRepository implements CardRepositoryPort {
    private repository;
    private reviewsRepository;
    constructor(repository: Model<CardDocument>, reviewsRepository: ReviewsRepository);
    loadCard(cardId: string): Promise<CardEntity>;
    updateCard(card: CardEntity): Promise<import("mongoose").Document<unknown, {}, CardDocument> & Card & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(dto: CreateCardOrmDto): Promise<import("mongoose").Document<unknown, {}, CardDocument> & Card & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findById(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, CardDocument> & Card & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, CardDocument> & Card & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, CardDocument, "findOne">;
    search(query: string): Promise<(import("mongoose").Document<unknown, {}, CardDocument> & Card & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    filterReviews(cardId: string, typeOfReview: string): Promise<Omit<import("mongoose").Document<unknown, {}, import("../reviews/entities/review-orm.entity").ReviewDocument> & Review & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
}
