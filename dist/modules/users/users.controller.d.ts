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
import { UsersRepository } from './users.repository';
import { UpdateUserUseCase } from 'src/domains/ports/in/update-user.use-case';
import { UpdateUserPasswordUseCase } from 'src/domains/ports/in/update-user-password.use-case';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
export declare class UsersController {
    private readonly _updateUserUseCase;
    private readonly _updateUserPasswordUseCase;
    private readonly usersRepository;
    constructor(_updateUserUseCase: UpdateUserUseCase, _updateUserPasswordUseCase: UpdateUserPasswordUseCase, usersRepository: UsersRepository);
    getMe(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./entities/user-orm.entity").UserDocument> & import("./entities/user-orm.entity").User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./entities/user-orm.entity").UserDocument> & import("./entities/user-orm.entity").User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/user-orm.entity").UserDocument, "findOne">;
    update(id: string, dto: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/user-orm.entity").UserDocument> & import("./entities/user-orm.entity").User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updatePassword(id: string, dto: UpdateUserPasswordDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/user-orm.entity").UserDocument> & import("./entities/user-orm.entity").User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    search(query: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/user-orm.entity").UserDocument> & import("./entities/user-orm.entity").User & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
