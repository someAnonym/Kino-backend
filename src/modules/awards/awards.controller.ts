import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AwardsRepository } from './awards.repository';
import { CreateAwardOrmDto } from './dto/create-award.dto';
import { ObjectId } from 'mongodb';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('awards')
@ApiBearerAuth()
@ApiTags('Awards')
export class AwardsController {
  constructor(private readonly _awardsRepository: AwardsRepository) {}

  @Get('/all')
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this._awardsRepository.getAll();
  }

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateAwardOrmDto) {
    return this._awardsRepository.create(dto);
  }

  @Delete('/delete/:id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: string) {
    return this._awardsRepository.deleteAward(id);
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  getAward(@Param('id') id: string) {
    return this._awardsRepository.getOneById(id);
  }
}
