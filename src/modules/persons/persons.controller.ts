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

@Controller('persons')
@ApiBearerAuth()
@ApiTags('Persons')
export class PersonsController {
  constructor(
    @Inject(UpdatePersonUseCaseSymbol)
    private readonly _updatePersonUseCase: UpdatePersonUseCase,
    private readonly _personsRepository: PersonsRepository,
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
  getOne(@Param('id') id: string) {
    return this._personsRepository.getOneById(id);
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

  @Put('/update')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() dto: UpdatePersonOrmDto) {
    // return this._personsRepository.update()
    const command = new UpdatePersonCommand(id, dto.comments);

    const updatedPerson = await this._updatePersonUseCase.UpdatePerson(command);
    return await this._personsRepository.update(updatedPerson);
  }
}
