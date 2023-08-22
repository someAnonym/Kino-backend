export interface CreateQuoteDto {
  text: string;
  whoseText: string;
}

export interface QuoteRepositoryPort {
  createQuote(dto: CreateQuoteDto);
  deleteQuote(id: string);
  getQuoteById(id: string);
  getAll();
}
