import { ObjectId } from 'mongodb';
import { Comment } from './entities/comment-orm.entity';
import { CommentEntity } from 'src/domains/entities/comment.entity';

type CommentData = { _id: ObjectId } & Comment;

export class CommentMapper {
  static mapToDomain(comment: CommentData): CommentEntity {
    const id = comment._id.valueOf() as string;
    const user = comment.user.valueOf() as string;
    const comments = comment.comments.map((i) => i.valueOf() as string);

    return new CommentEntity(
      id,
      user,
      comment.likes,
      comment.dislikes,
      comment.title,
      comment.date,
      comment.text,
      comments,
      comment.complaints,
    );
  }
}
