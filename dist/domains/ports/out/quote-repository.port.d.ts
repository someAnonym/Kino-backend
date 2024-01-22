export interface CreateQuoteDto {
    text: string;
    whoseText: string;
}
export interface QuoteRepositoryPort {
    createQuote(dto: CreateQuoteDto): any;
    deleteQuote(id: string): any;
    getQuoteById(id: string): any;
    getAll(): any;
}
