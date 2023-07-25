import { ObjectId } from 'mongodb';
import * as mongoose from 'mongoose';
export declare class Review {
    user: ObjectId;
    typeOfReview: string;
    likes: number;
    dislikes: number;
    title: string;
    date: Date;
    text: string;
    comments: string[];
    complaints: string[];
}
export declare const ReviewSchema: mongoose.Schema<Review, mongoose.Model<Review, any, any, any, mongoose.Document<unknown, any, Review> & Review & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Review, mongoose.Document<unknown, {}, Review> & Review & {
    _id: mongoose.Types.ObjectId;
}>;
