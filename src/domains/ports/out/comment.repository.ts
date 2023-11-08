import { CommentEntity } from 'src/domains/entities/comment.entity';

export interface CreateCommentDto {
  likes: number;
  user: string;
  dislikes: number;
  date: Date;
  text: string;
  comments: string[];
  complaints: string[];
}

export interface CommentRepositoryPort {
  delete(CommentId: string);
  getOneById(id: string);
  loadComment(commentId: string);
  updateComm(comment: CommentEntity);
  getAll();
  create(dto: CreateCommentDto);
}
