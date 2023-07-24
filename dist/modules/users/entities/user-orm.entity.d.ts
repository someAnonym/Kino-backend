import * as mongoose from 'mongoose';
import { Genres } from './genges.entity';
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
    wasOnline?: Date;
    gender: string;
    birthday: string;
    country: string;
    city: string;
    favoriteGenres: Genres[];
    films: ObjectId[];
    friends: ObjectId[];
    favoriteFilms: ObjectId[];
    expectedFilms: ObjectId[];
    persons: string[];
    favoritePersons: string[];
    reviews: string[];
    comments: string[];
    likedFilms: ObjectId[];
    dislikedFilms: ObjectId[];
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & User & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, User> & User & {
    _id: mongoose.Types.ObjectId;
}>;
