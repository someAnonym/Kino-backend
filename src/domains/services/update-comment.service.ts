import { CommentEntity } from '../entities/comment.entity';
import { UpdateCommentCommand } from '../ports/in/udpate-comment.command';
import { CommentRepositoryPort } from '../ports/out/comment.repository';

export class UpdateCommentService {
  constructor(private readonly _commentRepositoryPort: CommentRepositoryPort) {}

  async updateComment(command: UpdateCommentCommand): Promise<CommentEntity> {
    const comment = await this._commentRepositoryPort.loadComment(command.commentId);

    comment.updateComments(command.comments);
    comment.updateLikes(command.likes);
    comment.updateDislikes(command.dislikes);

    await this._commentRepositoryPort.updateComm(comment);
    return comment;
  }
}
