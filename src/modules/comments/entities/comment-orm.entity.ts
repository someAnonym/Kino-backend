import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';

import * as mongoose from 'mongoose';

export type CommentDocument = Comment & Document;
@Schema()
export class Comment {
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    default: [],
  })
  user: ObjectId;

  @Prop()
  likes: number;

  @Prop()
  dislikes: number;

  @Prop()
  text: string;

  @Prop()
  date: Date;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    default: [],
  })
  comments: ObjectId[];

  @Prop()
  complaints: string[];
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
