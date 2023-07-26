import { Prop, SchemaFactory } from '@nestjs/mongoose';

export type QuoteDocuments = Quote & Document;
export class Quote {
  @Prop()
  picture: string;

  @Prop()
  text: string;

  @Prop()
  whoseText: string;
}
export const QuoteSchema = SchemaFactory.createForClass(Quote);
