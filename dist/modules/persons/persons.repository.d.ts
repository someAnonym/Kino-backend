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
import { CreatePersonDto, PersonsRepositoryPort } from 'src/domains/ports/out/person-repository.port';
import { Person, PersonDocument } from './entities/person-orm.entity';
import { Model } from 'mongoose';
import { PersonEntity } from 'src/domains/entities/person.entity';
export declare class PersonsRepository implements PersonsRepositoryPort {
    private repository;
    constructor(repository: Model<PersonDocument>);
    update(person: PersonEntity): Promise<import("mongoose").Document<unknown, {}, PersonDocument> & Person & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(PersonId: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, PersonDocument> & Person & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, PersonDocument> & Person & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, PersonDocument, "findOneAndDelete">;
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, PersonDocument> & Person & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, PersonDocument> & Person & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, PersonDocument, "find">;
    getOneById(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, PersonDocument> & Person & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, PersonDocument> & Person & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, PersonDocument, "findOne">;
    create(dto: CreatePersonDto): Promise<import("mongoose").Document<unknown, {}, PersonDocument> & Person & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    loadPerson(personId: string): Promise<PersonEntity>;
}
