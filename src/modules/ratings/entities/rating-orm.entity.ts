import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RatingDocument = Rating & Document;

@Schema()
export class Rating {
  @Prop()
  rate: string;

  @Prop()
  whoose: string;
}
export const RatingSchema = SchemaFactory.createForClass(Rating);
