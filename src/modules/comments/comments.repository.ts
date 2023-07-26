import { ForbiddenException, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentRepositoryPort, CreateCommentDto } from 'src/domains/ports/out/comment.repository';
import { Comment, CommentDocument } from './entities/comment-orm.entity';
import { CommentEntity } from 'src/domains/entities/comment.entity';
import { CommentMapper } from './comment.mapper';

export class CommentsRepository implements CommentRepositoryPort {
  constructor(@InjectModel(Comment.name) private repository: Model<CommentDocument>) {}

  async update(comment: CommentEntity) {
    try {
      const mongoose = require('mongoose');
      const updatedComment = comment.getCommentData();
      const currentComment = await this.repository.findById(updatedComment.id);
      currentComment.likes = updatedComment.likes;
      currentComment.dislikes = updatedComment.dislikes;
      for (let i = 0; i < currentComment.comments.length; i++) {
        currentComment.comments[i] = mongoose.Types.ObjectId(updatedComment.comments[i]);
      }

      return this.repository.findByIdAndUpdate(currentComment._id, currentComment);
    } catch (error) {
      throw new ForbiddenException('Ошибка при обновлении Комментария', error);
    }
  }

  delete(CommentId: string) {
    return this.repository.findByIdAndDelete(CommentId);
  }

  create(dto: CreateCommentDto) {
    return this.repository.create(dto);
  }

  getOneById(id: string) {
    return this.repository.findById(id);
  }

  getAll() {
    return this.repository.find();
  }

  async loadComment(commentId: string) {
    const comment = await this.repository.findById(commentId);

    return CommentMapper.mapToDomain(comment);
  }
}
