import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
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
  getAll() {
    return this._personsRepository.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this._personsRepository.getOneById(id);
  }

  @Delete('/delete')
  delete(@Param('id') id: string) {
    return this._personsRepository.delete(id);
  }

  @Post('/create')
  create(@Body() dto: CreatePersonOrmDto) {
    return this._personsRepository.create(dto);
  }

  @Put('/update')
  async update(@Param('id') id: string, @Body() dto: UpdatePersonOrmDto) {
    // return this._personsRepository.update()
    const command = new UpdatePersonCommand(id, dto.comments);

    const updatedPerson = await this._updatePersonUseCase.UpdatePerson(command);
    return await this._personsRepository.update(updatedPerson);
  }
}
