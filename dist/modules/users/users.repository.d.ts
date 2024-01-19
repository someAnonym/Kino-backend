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
import { UserEntity } from 'src/domains/entities/user.entity';
import { UserRepositoryPort } from 'src/domains/ports/out/user-repository.port';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './entities/user-orm.entity';
import { Model } from 'mongoose';
export declare class UsersRepository implements UserRepositoryPort {
    private repository;
    constructor(repository: Model<UserDocument>);
    loadUser(userId: string): Promise<UserEntity>;
    updateUser(user: UserEntity): Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(dto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findByEmail(email: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, UserDocument> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, UserDocument> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, UserDocument, "findOne">;
    findById(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, UserDocument> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, UserDocument> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, UserDocument, "findOne">;
    search(query: string): Promise<(import("mongoose").Document<unknown, {}, UserDocument> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
