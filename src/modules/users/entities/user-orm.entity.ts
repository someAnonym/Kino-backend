import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CardEntity } from 'src/domains/entities/card.entity';
import { CommentEntity } from 'src/domains/entities/comment.entity';
import * as mongoose from 'mongoose';
import { ReviewEntity } from 'src/domains/entities/review.entity';
import { Genres } from './genges.entity';
import { ObjectId } from 'mongodb';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ default: 'Vasya' })
  name: string;

  @Prop({ unique: true, default: 'test@test.test' })
  email: string;

  @Prop({ default: '123123321' })
  password: string;

  @Prop({ default: 'Pupkin' })
  secondName: string;

  @Prop({ default: '' })
  vk: string;

  @Prop({ default: '' })
  youtube: string;

  @Prop({ default: '' })
  instagram: string;

  @Prop({ default: '' })
  twitter: string;

  @Prop({ default: '' })
  facebook: string;

  @Prop({ default: '' })
  aboutMe: string;

  @Prop({ default: '' })
  avatarImage?: string;

  @Prop({ default: Date.now() })
  wasOnline?: Date;

  @Prop({ default: '' })
  gender: string;

  @Prop({ default: '' })
  birthday: string;

  @Prop({ default: '' })
  country: string;

  @Prop({ default: '' })
  city: string;

  @Prop({ default: [] })
  favoriteGenres: Genres[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    default: [],
  })
  films: ObjectId[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    default: [],
  })
  friends: ObjectId[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    default: [],
  })
  favoriteFilms: ObjectId[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    default: [],
  })
  expectedFilms: ObjectId[];

  @Prop({ default: [] })
  persons: string[];

  @Prop({ default: [] })
  favoritePersons: string[];

  @Prop({ default: [] })
  reviews: string[];

  @Prop({ default: [] })
  comments: string[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    default: [],
  })
  likedFilms: ObjectId[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    default: [],
  })
  dislikedFilms: ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
