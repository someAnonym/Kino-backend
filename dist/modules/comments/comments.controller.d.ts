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
import { UpdateCommentUseCase } from 'src/domains/ports/in/update-comment.use-case';
import { CommentsRepository } from './comments.repository';
import { createCommentOrmDto } from './dto/create-comment.dto';
import { UpdateCommentsOrmDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly _updateCommentUseCase;
    private readonly _commentsRepository;
    constructor(_updateCommentUseCase: UpdateCommentUseCase, _commentsRepository: CommentsRepository);
    create(dto: createCommentOrmDto): Promise<Omit<import("mongoose").Document<unknown, {}, import("./entities/comment-orm.entity").CommentDocument> & import("./entities/comment-orm.entity").Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./entities/comment-orm.entity").CommentDocument> & import("./entities/comment-orm.entity").Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("./entities/comment-orm.entity").CommentDocument> & import("./entities/comment-orm.entity").Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/comment-orm.entity").CommentDocument, "find">;
    getOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./entities/comment-orm.entity").CommentDocument> & import("./entities/comment-orm.entity").Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./entities/comment-orm.entity").CommentDocument> & import("./entities/comment-orm.entity").Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/comment-orm.entity").CommentDocument, "findOne">;
    update(id: string, dto: UpdateCommentsOrmDto): Promise<Omit<import("mongoose").Document<unknown, {}, import("./entities/comment-orm.entity").CommentDocument> & import("./entities/comment-orm.entity").Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    delete(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./entities/comment-orm.entity").CommentDocument> & import("./entities/comment-orm.entity").Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./entities/comment-orm.entity").CommentDocument> & import("./entities/comment-orm.entity").Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/comment-orm.entity").CommentDocument, "findOneAndDelete">;
}
