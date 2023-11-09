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
import { PersonsRepository } from './persons.repository';
import { UpdatePersonUseCase } from 'src/domains/ports/in/update-person.use-case';
import { CreatePersonOrmDto } from './dto/create-person.dto';
import { UpdatePersonOrmDto } from './dto/update-person.dto';
import { CommentsRepository } from '../comments/comments.repository';
import { Person } from './entities/person-orm.entity';
export declare class PersonsController {
    private readonly _updatePersonUseCase;
    private readonly _personsRepository;
    private readonly commentsRepository;
    constructor(_updatePersonUseCase: UpdatePersonUseCase, _personsRepository: PersonsRepository, commentsRepository: CommentsRepository);
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./entities/person-orm.entity").PersonDocument> & Person & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("./entities/person-orm.entity").PersonDocument> & Person & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/person-orm.entity").PersonDocument, "find">;
    search(query: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/person-orm.entity").PersonDocument> & Person & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/person-orm.entity").PersonDocument> & Person & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./entities/person-orm.entity").PersonDocument> & Person & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./entities/person-orm.entity").PersonDocument> & Person & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/person-orm.entity").PersonDocument, "findOneAndDelete">;
    create(dto: CreatePersonOrmDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/person-orm.entity").PersonDocument> & Person & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, dto: UpdatePersonOrmDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/person-orm.entity").PersonDocument> & Person & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
