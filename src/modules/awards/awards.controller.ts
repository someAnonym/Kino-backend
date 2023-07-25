import { Body, Controller, Delete, Get, Inject, Param, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AwardsRepository } from './awards.repository';
import { CreateAwardOrmDto } from './dto/create-award.dto';
import { ObjectId } from 'mongodb';

@Controller('awards')
@ApiBearerAuth()
@ApiTags('Awards')
export class AwardsController {
  constructor(private readonly _awardsRepository: AwardsRepository) {}

  @Post('/create')
  create(@Body() dto: CreateAwardOrmDto) {
    return this._awardsRepository.create(dto);
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: string) {
    return this._awardsRepository.deleteAward(id);
  }

  @Get('/:id')
  getAward(@Param('id') id: string) {
    return this._awardsRepository.getOneById(id);
  }

  @Get('/all')
  getAll() {
    return this._awardsRepository.getAll();
  }
}
