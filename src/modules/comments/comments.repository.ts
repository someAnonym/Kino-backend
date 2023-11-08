import { ForbiddenException, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentRepositoryPort, CreateCommentDto } from 'src/domains/ports/out/comment.repository';
import { Comment, CommentDocument } from './entities/comment-orm.entity';
import { CommentEntity } from 'src/domains/entities/comment.entity';
import { CommentMapper } from './comment.mapper';
import { createCommentOrmDto } from './dto/create-comment.dto';

export class CommentsRepository implements CommentRepositoryPort {
  constructor(@InjectModel(Comment.name) private repository: Model<CommentDocument>) {}

  create(dto: createCommentOrmDto) {
    return this.repository.create(dto);
  }

  async updateComm(comment: CommentEntity) {
    try {
      const mongoose = require('mongoose');
      const updatedComment = comment.getCommentData();
      const currentComment = await this.repository.findById(updatedComment.id);
      currentComment.likes = updatedComment.likes;
      currentComment.text = updatedComment.text;
      currentComment.dislikes = updatedComment.dislikes;
      currentComment.comments = updatedComment.comments.map((i) => new mongoose.Types.ObjectId(i));

      await currentComment.save();

      return currentComment;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Ошибка при обновлении Комментария', error);
    }
  }

  delete(CommentId: string) {
    return this.repository.findByIdAndDelete(CommentId);
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
