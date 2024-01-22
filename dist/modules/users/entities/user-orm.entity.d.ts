import * as mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
export type UserDocument = User & Document;
export declare class User {
    name: string;
    email: string;
    password: string;
    secondName: string;
    vk: string;
    youtube: string;
    instagram: string;
    twitter: string;
    facebook: string;
    aboutMe: string;
    avatarImage?: string;
    gender: string;
    birthday: string;
    country: string;
    city: string;
    favoriteGenres: string[];
    friends: ObjectId[];
    favoriteFilms: ObjectId[];
    persons: ObjectId[];
    reviews: ObjectId[];
    comments: ObjectId[];
    likedFilms: ObjectId[];
    dislikedFilms: ObjectId[];
    dislikedComments: ObjectId[];
    likedComments: ObjectId[];
    dislikedReviews: ObjectId[];
    likedReviews: ObjectId[];
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & User & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, User> & User & {
    _id: mongoose.Types.ObjectId;
}>;
