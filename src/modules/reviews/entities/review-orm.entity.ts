import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import * as mongoose from 'mongoose';

export type ReviewDocument = Review & Document;

@Schema()
export class Review {
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    default: {},
  })
  user: ObjectId;

  @Prop()
  typeOfReview: string;

  @Prop()
  likes: number;

  @Prop()
  dislikes: number;

  @Prop()
  title: string;

  @Prop()
  date: Date;

  @Prop()
  text: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    default: [],
  })
  comments: string[];

  @Prop()
  complaints: string[];
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
