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
import { CreateDirectorDto, DirectorRepositoryPort } from 'src/domains/ports/out/director-repository.port';
import { Director, DirectorDocument } from './entities/director-orm.entity';
import { Model } from 'mongoose';
export declare class DirectorsRepository implements DirectorRepositoryPort {
    private readonly repository;
    constructor(repository: Model<DirectorDocument>);
    deleteDirector(directorId: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, DirectorDocument> & Director & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, DirectorDocument> & Director & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, DirectorDocument, "findOneAndDelete">;
    createDirector(dto: CreateDirectorDto): Promise<import("mongoose").Document<unknown, {}, DirectorDocument> & Director & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, DirectorDocument> & Director & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, DirectorDocument> & Director & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, DirectorDocument, "find">;
    getDirecorById(directorId: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, DirectorDocument> & Director & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, DirectorDocument> & Director & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, DirectorDocument, "findOne">;
}
