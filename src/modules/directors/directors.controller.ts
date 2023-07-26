import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { DirectorsRepository } from './directors.repository';
import { CreateDirectorOrmDto } from './dto/create-director-orm.dto';

@ApiTags('Directors')
@ApiBearerAuth()
@Controller('directors')
export class DirectorsController {
  constructor(private readonly _directorsRepository: DirectorsRepository) {}

  @Get('/all')
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this._directorsRepository.getAll();
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  getOne(@Param('id') id: string) {
    return this._directorsRepository.getDirecorById(id);
  }

  @Post('/create')
  create(@Body() dto: CreateDirectorOrmDto) {
    return this._directorsRepository.createDirector(dto);
  }
}
