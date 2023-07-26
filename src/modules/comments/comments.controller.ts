import { Body, Controller, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  UpdateCommentUseCase,
  UpdateCommentUseCaseSymbol,
} from 'src/domains/ports/in/update-comment.use-case';
import { CommentsRepository } from './comments.repository';
import { createCommentOrmDto } from './dto/create-comment.dto';
import { UpdateCommentsOrmDto } from './dto/update-comment.dto';
import { UpdateCommentCommand } from 'src/domains/ports/in/udpate-comment.command';

@Controller('cards')
@ApiBearerAuth()
@ApiTags('Cards')
export class CommentsController {
  constructor(
    @Inject(UpdateCommentUseCaseSymbol)
    private readonly _updateCommentUseCase: UpdateCommentUseCase,

    private readonly _commentsRepository: CommentsRepository,
  ) {}

  @Get('/all')
  getAll() {
    return this._commentsRepository.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this._commentsRepository.getOneById(id);
  }

  @Post('/create')
  create(@Body() dto: createCommentOrmDto) {
    return this._commentsRepository.create(dto);
  }

  @Put('update')
  async update(@Param('id') id: string, @Body() dto: UpdateCommentsOrmDto) {
    const command = new UpdateCommentCommand(id, dto.comments, dto.likes, dto.dislikes);
    const updatedComment = await this._updateCommentUseCase.UpdateComment(command);

    return this._commentsRepository.update(updatedComment);
  }
}