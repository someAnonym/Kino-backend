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
import { CommentRepositoryPort } from 'src/domains/ports/out/comment.repository';
import { Comment, CommentDocument } from './entities/comment-orm.entity';
import { CommentEntity } from 'src/domains/entities/comment.entity';
import { createCommentOrmDto } from './dto/create-comment.dto';
export declare class CommentsRepository implements CommentRepositoryPort {
    private repository;
    constructor(repository: Model<CommentDocument>);
    create(dto: createCommentOrmDto): Promise<import("mongoose").Document<unknown, {}, CommentDocument> & Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateComm(comment: CommentEntity): Promise<import("mongoose").Document<unknown, {}, CommentDocument> & Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(CommentId: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, CommentDocument> & Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, CommentDocument> & Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, CommentDocument, "findOneAndDelete">;
    getOneById(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, CommentDocument> & Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, CommentDocument> & Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, CommentDocument, "findOne">;
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, CommentDocument> & Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, CommentDocument> & Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, CommentDocument, "find">;
    loadComment(commentId: string): Promise<CommentEntity>;
}
