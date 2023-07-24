import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Genres } from 'src/modules/users/entities/genges.entity';
import { User } from 'src/modules/users/entities/user-orm.entity';
import * as mongoose from 'mongoose';
export type CardDocument = Card & Document;

@Schema()
export class Card {
  @Prop()
  posterImage: string;

  @Prop()
  reviews: string[];

  @Prop()
  name: string;

  @Prop()
  secondName: string;

  @Prop()
  ratings: string[];

  @Prop()
  userLike: number;

  @Prop()
  userDislike: number;

  @Prop()
  favorites: number;

  @Prop()
  year: string;

  @Prop()
  country: string;

  @Prop()
  slogan: string;

  @Prop()
  directors: string[];

  @Prop()
  screenwriters: string[];

  @Prop()
  producers: string[];

  @Prop()
  operators: string[];

  @Prop()
  composers: string[];

  @Prop()
  artists: string[];

  @Prop()
  editors: string[];

  @Prop()
  genres: Genres[];

  @Prop()
  collecting: number;

  @Prop()
  premiereInWorld: string;

  @Prop()
  premiereInRussia: string;

  @Prop()
  age: number;

  @Prop()
  duration: number;

  @Prop()
  production: string[];

  @Prop()
  specialEffects: string[];

  @Prop()
  dubbingStudios: string[];

  @Prop()
  persons: string[];

  @Prop()
  trailers: string[];

  @Prop()
  awards: string[];

  @Prop()
  posters: string[];

  @Prop()
  shots: string[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    default: [],
  })
  sequelAndPrequels: ObjectId[];

  @Prop()
  quotes: string[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    default: [],
  })
  seemFilms: ObjectId[];

  @Prop()
  description: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);
