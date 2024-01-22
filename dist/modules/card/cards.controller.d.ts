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
import { UpdateCardDto } from './dto/update-card.dto';
import { CardsRepository } from './cards.repository';
import { UpdateCardUseCase } from 'src/domains/ports/in/update-card.use-case';
import { CreateCardOrmDto } from './dto/create-card.dto';
export declare class CardsController {
    private readonly _updateCardUseCase;
    private readonly cardsRepository;
    constructor(_updateCardUseCase: UpdateCardUseCase, cardsRepository: CardsRepository);
    search(query: string): Promise<Omit<import("mongoose").Document<unknown, {}, import("./entities/card-orm.entity").CardDocument> & import("./entities/card-orm.entity").Card & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    getAll(): import("mongoose").Query<Omit<import("mongoose").Document<unknown, {}, import("./entities/card-orm.entity").CardDocument> & import("./entities/card-orm.entity").Card & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[], import("mongoose").Document<unknown, {}, import("./entities/card-orm.entity").CardDocument> & import("./entities/card-orm.entity").Card & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/card-orm.entity").CardDocument, "find">;
    getMe(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./entities/card-orm.entity").CardDocument> & import("./entities/card-orm.entity").Card & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./entities/card-orm.entity").CardDocument> & import("./entities/card-orm.entity").Card & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/card-orm.entity").CardDocument, "findOne">;
    update(id: string, dto: UpdateCardDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/card-orm.entity").CardDocument> & import("./entities/card-orm.entity").Card & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(dto: CreateCardOrmDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/card-orm.entity").CardDocument> & import("./entities/card-orm.entity").Card & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    filterReviews(id: string, typeOfReview: string): Promise<Omit<import("mongoose").Document<unknown, {}, import("../reviews/entities/review-orm.entity").ReviewDocument> & import("../reviews/entities/review-orm.entity").Review & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    delete(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./entities/card-orm.entity").CardDocument> & import("./entities/card-orm.entity").Card & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./entities/card-orm.entity").CardDocument> & import("./entities/card-orm.entity").Card & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/card-orm.entity").CardDocument, "findOneAndDelete">;
}
