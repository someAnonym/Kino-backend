import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  UpdateCommentUseCase,
  UpdateCommentUseCaseSymbol,
} from 'src/domains/ports/in/update-comment.use-case';
import { CommentsRepository } from './comments.repository';
import { createCommentOrmDto } from './dto/create-comment.dto';
import { UpdateCommentsOrmDto } from './dto/update-comment.dto';
import { UpdateCommentCommand } from 'src/domains/ports/in/udpate-comment.command';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UpdateCommentService } from 'src/domains/services/update-comment.service';

@Controller('comments')
@ApiBearerAuth()
@ApiTags('Comments')
export class CommentsController {
  constructor(
    @Inject(UpdateCommentUseCaseSymbol)
    private readonly _updateCommentUseCase: UpdateCommentUseCase,
    private readonly _commentsRepository: CommentsRepository,
  ) {}
  @Post('/create')
  @UseGuards(JwtAuthGuard)
  async create(@Body() dto: createCommentOrmDto) {
    return await (await this._commentsRepository.create(dto)).populate('user');
  }

  @Get('/all')
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this._commentsRepository.getAll();
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  getOne(@Param('id') id: string) {
    return this._commentsRepository
      .getOneById(id)
      .populate('user')
      .populate('comments')
      .populate('comments', 'user')
      .populate({
        path: 'comments',
        populate: {
          path: 'user',
        },
      })
      .populate({
        path: 'comments',
        populate: {
          path: 'comments user',
        },
      });
  }

  @Put('/update/:id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() dto: UpdateCommentsOrmDto) {
    const command = new UpdateCommentCommand(id, dto.comments, dto.likes, dto.dislikes);
    // console.log(id, dto);
    const updatedComment = await this._updateCommentUseCase.updateComment(command);
    return await (
      await (
        await (
          await (
            await (await this._commentsRepository.updateComm(updatedComment)).populate('user')
          ).populate('comments', 'user')
        ).populate('comments')
      ).populate({
        path: 'comments',
        populate: {
          path: 'user',
        },
      })
    ).populate({
      path: 'comments',
      populate: {
        path: 'comments user',
      },
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: string) {
    return this._commentsRepository.delete(id);
  }
}
