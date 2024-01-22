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
import { QuotesRepository } from './quotes.repository';
import { CreateQuoteOrmDto } from './dto/create-quote-orm.dto';
export declare class QuotesController {
    private readonly _quotesRepository;
    constructor(_quotesRepository: QuotesRepository);
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./entities/quote-orm.entity").QuoteDocuments> & import("./entities/quote-orm.entity").Quote & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("./entities/quote-orm.entity").QuoteDocuments> & import("./entities/quote-orm.entity").Quote & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/quote-orm.entity").QuoteDocuments, "find">;
    getOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./entities/quote-orm.entity").QuoteDocuments> & import("./entities/quote-orm.entity").Quote & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./entities/quote-orm.entity").QuoteDocuments> & import("./entities/quote-orm.entity").Quote & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/quote-orm.entity").QuoteDocuments, "findOne">;
    create(dto: CreateQuoteOrmDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/quote-orm.entity").QuoteDocuments> & import("./entities/quote-orm.entity").Quote & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./entities/quote-orm.entity").QuoteDocuments> & import("./entities/quote-orm.entity").Quote & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./entities/quote-orm.entity").QuoteDocuments> & import("./entities/quote-orm.entity").Quote & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/quote-orm.entity").QuoteDocuments, "findOneAndDelete">;
}
