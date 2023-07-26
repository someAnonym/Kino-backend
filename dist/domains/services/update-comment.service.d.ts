import { CommentEntity } from '../entities/comment.entity';
import { UpdateCommentCommand } from '../ports/in/udpate-comment.command';
import { CommentRepositoryPort } from '../ports/out/comment.repository';
export declare class UpdateCommentService {
    private readonly _commentRepositoryPort;
    constructor(_commentRepositoryPort: CommentRepositoryPort);
    updatePerson(command: UpdateCommentCommand): Promise<CommentEntity>;
}
