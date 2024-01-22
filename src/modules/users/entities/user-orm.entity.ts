import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
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

  @Prop({ default: '' })
  gender: string;

  @Prop({ default: '' })
  birthday: string;

  @Prop({ default: '' })
  country: string;

  @Prop({ default: '' })
  city: string;

  @Prop({ default: [] })
  favoriteGenres: string[];

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
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }],
    default: [],
  })
  persons: ObjectId[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    default: [],
  })
  reviews: ObjectId[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    default: [],
  })
  comments: ObjectId[];

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

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    default: [],
  })
  dislikedComments: ObjectId[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    default: [],
  })
  likedComments: ObjectId[];
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    default: [],
  })
  dislikedReviews: ObjectId[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    default: [],
  })
  likedReviews: ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
