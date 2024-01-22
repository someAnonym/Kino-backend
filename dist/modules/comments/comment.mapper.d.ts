import { ObjectId } from 'mongodb';
import { Comment } from './entities/comment-orm.entity';
import { CommentEntity } from 'src/domains/entities/comment.entity';
type CommentData = {
    _id: ObjectId;
} & Comment;
export declare class CommentMapper {
    static mapToDomain(comment: CommentData): CommentEntity;
}
export {};
