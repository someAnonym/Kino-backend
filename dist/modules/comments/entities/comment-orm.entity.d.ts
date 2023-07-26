import { ObjectId } from 'mongodb';
import * as mongoose from 'mongoose';
export type CommentDocument = Comment & Document;
export declare class Comment {
    user: ObjectId;
    likes: number;
    dislikes: number;
    title: string;
    text: string;
    date: Date;
    comments: ObjectId[];
    complaints: string[];
}
export declare const CommentSchema: mongoose.Schema<Comment, mongoose.Model<Comment, any, any, any, mongoose.Document<unknown, any, Comment> & Comment & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Comment, mongoose.Document<unknown, {}, Comment> & Comment & {
    _id: mongoose.Types.ObjectId;
}>;
