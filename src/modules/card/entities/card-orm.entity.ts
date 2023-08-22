import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import * as mongoose from 'mongoose';
export type CardDocument = Card & Document;

@Schema()
export class Card {
  @Prop()
  backgroundImage: string;

  @Prop()
  posterImage: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    default: [],
  })
  reviews: ObjectId[];

  @Prop({ default: '' })
  name: string;

  @Prop({ default: '' })
  secondName: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }],
    default: [],
  })
  ratings: ObjectId[];

  @Prop({ default: 0 })
  userLike: number;

  @Prop({ default: 0 })
  userDislike: number;

  @Prop({ default: 0 })
  favorites: number;

  @Prop({ default: 0 })
  year: number;

  @Prop({ default: [] })
  country: string[];

  @Prop({ default: '' })
  slogan: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Director' }],
    default: [],
  })
  directors: ObjectId[];

  @Prop({ default: '' })
  screenwriters: string[];

  @Prop({ default: '' })
  producers: string[];

  @Prop({ default: '' })
  operators: string[];

  @Prop({ default: '' })
  composers: string[];

  @Prop({ default: '' })
  artists: string[];

  @Prop({ default: '' })
  editors: string[];

  @Prop({ default: '' })
  genres: string[];

  @Prop({ default: '' })
  collecting: number;

  @Prop({ default: '' })
  premiereInWorld: string;

  @Prop({ default: '' })
  premiereInRussia: string;

  @Prop({ default: '' })
  age: number;

  @Prop({ default: '' })
  duration: number;

  @Prop({ default: '' })
  production: string[];

  @Prop({ default: '' })
  specialEffects: string[];

  @Prop({ default: '' })
  dubbingStudios: string[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }],
    default: [],
  })
  persons: ObjectId[];

  @Prop({ default: '' })
  trailers: string[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Award' }],
    default: [],
  })
  awards: ObjectId[];

  @Prop({ default: '' })
  posters: string[];

  @Prop({ default: '' })
  shots: string[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    default: [],
  })
  sequelAndPrequels: ObjectId[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quote' }],
    default: [],
  })
  quotes: ObjectId[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    default: [],
  })
  seemFilms: ObjectId[];

  @Prop({
    default: '',
  })
  description: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);
