import { Module } from '@nestjs/common';
import { QuotesController } from './quotes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuotesRepository } from './quotes.repository';
import { Quote, QuoteSchema } from './entities/quote-orm.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Quote.name, schema: QuoteSchema }])],
  controllers: [QuotesController],
  providers: [QuotesRepository],
})
export class QuotesModule {}
