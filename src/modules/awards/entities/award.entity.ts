import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type AwardDocument = Award & Document;

@Schema()
export class Award {
  @Prop()
  picture: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  year: number;
}

export const AwardSchema = SchemaFactory.createForClass(Award);
