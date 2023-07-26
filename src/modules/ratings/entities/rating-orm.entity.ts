import { Prop, SchemaFactory } from '@nestjs/mongoose';

export type RatingDocument = Rating & Document;
export class Rating {
  @Prop()
  rate: string;

  @Prop()
  whoose: string;
}
export const RatingSchema = SchemaFactory.createForClass(Rating);
