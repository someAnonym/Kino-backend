import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type DirectorDocument = Director & Document;

@Schema()
export class Director {
  @Prop()
  name: string;

  @Prop()
  secondName: string;

  @Prop()
  picture: string;
}

export const DirectorSchema = SchemaFactory.createForClass(Director);
