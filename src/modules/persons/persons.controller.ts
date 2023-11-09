import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PersonsRepository } from './persons.repository';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { InjectModel } from '@nestjs/mongoose';
import {
  UpdatePersonUseCase,
  UpdatePersonUseCaseSymbol,
} from 'src/domains/ports/in/update-person.use-case';
import { CreatePersonOrmDto } from './dto/create-person.dto';
import { UpdatePersonOrmDto } from './dto/update-person.dto';
import { UpdatePersonCommand } from 'src/domains/ports/in/update-person.command';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CommentsRepository } from '../comments/comments.repository';
import { MappedPerson, Person } from './entities/person-orm.entity';
import { Comment } from '../comments/entities/comment-orm.entity';

type PersonWithParse = Person & { comments: Comment };

@Controller('persons')
@ApiBearerAuth()
@ApiTags('Persons')
export class PersonsController {
  constructor(
    @Inject(UpdatePersonUseCaseSymbol)
    private readonly _updatePersonUseCase: UpdatePersonUseCase,
    private readonly _personsRepository: PersonsRepository,
    private readonly commentsRepository: CommentsRepository,
  ) {}

  @Get('/all')
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this._personsRepository.getAll();
  }

  @Get('/search')
  @UseGuards(JwtAuthGuard)
  search(@Query('query') query: string) {
    return this._personsRepository.search(query);
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  async getOne(@Param('id') id: string) {
    return await this._personsRepository
      .getOneById(id)
      .populate('awards')
      .populate('bestFilms')
      .populate('films')
      .populate({
        path: 'bestFilms',
        populate: {
          path: 'ratings',
        },
      })
      .populate({
        path: 'films',
        populate: {
          path: 'ratings',
        },
      })
      .populate({
        strictPopulate: false,
        path: 'comments',
        populate: {
          path: 'comments user',
        },
      })
      .populate({
        strictPopulate: true,
        path: 'comments',
        populate: {
          path: 'comments',
          populate: {
            path: 'comments user',
          },
        },
      })
      .populate({
        strictPopulate: true,
        path: 'comments',
        populate: {
          path: 'comments',
          populate: {
            path: 'comments',
            populate: {
              path: 'comments user',
            },
          },
        },
      });
  }

  @Delete('/delete')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: string) {
    return this._personsRepository.delete(id);
  }

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreatePersonOrmDto) {
    return this._personsRepository.create(dto);
  }

  @Put('/update/:id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() dto: UpdatePersonOrmDto) {
    const command = new UpdatePersonCommand(id, dto.comments);

    const updatedPersonEntity = await this._updatePersonUseCase.updatePerson(command);
    const updatedPerson = this._personsRepository.getOneById(updatedPersonEntity.id);
    return updatedPerson
      .populate('comments')
      .populate({
        path: 'comments',
        populate: {
          path: 'comments user',
        },
      })
      .populate('awards')
      .populate('bestFilms')
      .populate('films');
  }
}
