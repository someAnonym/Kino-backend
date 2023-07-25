import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
import { Genres } from 'src/modules/users/entities/genges.entity';

export type PersonDocument = Person & Document;

@Schema()
export class Person {
  @Prop()
  name: string;

  @Prop()
  englishName: string;

  @Prop()
  linkToBiography: string;

  @Prop()
  career: string[];

  @Prop()
  height: string;

  @Prop()
  birthday: string[];

  @Prop()
  bornPlace: string;

  @Prop()
  genres: Genres[];

  @Prop()
  totalCountOfFilmsAndYears: string[];

  @Prop()
  favorites: number;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Award' }],
    default: [],
  })
  awards: ObjectId[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    default: [],
  })
  bestFilms: ObjectId[];

  @Prop()
  lastNews: string[];

  @Prop()
  photos: string[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    default: [],
  })
  films: ObjectId[];

  @Prop()
  comments: string[];
}

export const PersonSchema = SchemaFactory.createForClass(Person);
