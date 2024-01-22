import { InjectModel } from '@nestjs/mongoose';
import { CreateQuoteDto, QuoteRepositoryPort } from 'src/domains/ports/out/quote-repository.port';
import { Model } from 'mongoose';
import { Quote, QuoteDocuments } from './entities/quote-orm.entity';

export class QuotesRepository implements QuoteRepositoryPort {
  constructor(
    @InjectModel(Quote.name)
    private readonly repository: Model<QuoteDocuments>,
  ) {}

  createQuote(dto: CreateQuoteDto) {
    return this.repository.create(dto);
  }

  deleteQuote(id: string) {
    return this.repository.findByIdAndDelete(id);
  }

  getQuoteById(id: string) {
    return this.repository.findById(id);
  }

  getAll() {
    return this.repository.find();
  }
}
