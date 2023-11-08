import { CommentEntity } from 'src/domains/entities/comment.entity';
import { UpdateCommentCommand } from './udpate-comment.command';

export const UpdateCommentUseCaseSymbol = Symbol('UpdateCommentUseCase');

export interface UpdateCommentUseCase {
  updateComment(command: UpdateCommentCommand): Promise<CommentEntity>;
}
