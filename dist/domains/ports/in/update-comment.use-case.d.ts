import { CommentEntity } from 'src/domains/entities/comment.entity';
import { UpdateCommentCommand } from './udpate-comment.command';
export declare const UpdateCommentUseCaseSymbol: unique symbol;
export interface UpdateCommentUseCase {
    updateComment(command: UpdateCommentCommand): Promise<CommentEntity>;
}
