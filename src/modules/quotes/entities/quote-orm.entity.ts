import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type QuoteDocuments = Quote & Document;

@Schema()
export class Quote {
  @Prop()
  text: string;

  @Prop()
  whoseText: string;
}
export const QuoteSchema = SchemaFactory.createForClass(Quote);
