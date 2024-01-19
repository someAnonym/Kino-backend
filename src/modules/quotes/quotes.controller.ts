import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { QuotesRepository } from './quotes.repository';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CreateQuoteOrmDto } from './dto/create-quote-orm.dto';

@ApiBearerAuth()
@ApiTags('Quotes')
@Controller('quotes')
export class QuotesController {
  constructor(private readonly _quotesRepository: QuotesRepository) {}

  @Get('/all')
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this._quotesRepository.getAll();
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  getOne(@Param('id') id: string) {
    return this._quotesRepository.getQuoteById(id);
  }

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateQuoteOrmDto) {
    return this._quotesRepository.createQuote(dto);
  }

  @Delete('/delete')
  @UseGuards(JwtAuthGuard)
  deleteOne(@Param('id') id: string) {
    return this._quotesRepository.deleteQuote(id);
  }
}
