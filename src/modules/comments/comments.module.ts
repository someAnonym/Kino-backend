import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsController } from './comments.controller';
import { CommentsRepository } from './comments.repository';
import { Comment, CommentSchema } from './entities/comment-orm.entity';
import { UpdateCommentService } from 'src/domains/services/update-comment.service';
import { UpdateCommentUseCaseSymbol } from 'src/domains/ports/in/update-comment.use-case';
import { CommentRepositoryPort } from 'src/domains/ports/out/comment.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }])],
  controllers: [CommentsController],
  exports: [CommentsRepository],
  providers: [
    CommentsRepository,
    {
      provide: UpdateCommentUseCaseSymbol,
      useClass: UpdateCommentService,
    },
    {
      provide: UpdateCommentUseCaseSymbol,
      useFactory: (_updateRepository: CommentRepositoryPort) => {
        return new UpdateCommentService(_updateRepository);
      },
      inject: [CommentsRepository],
    },
  ],
})
export class CommentsModule {}
