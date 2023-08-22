import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
import { Genres } from 'src/modules/users/entities/genges.entity';
export type PersonDocument = Person & Document;
export declare class Person {
    name: string;
    englishName: string;
    avatarImage: string;
    linkToBiography: string;
    career: string[];
    height: string;
    birthday: string[];
    bornPlace: string;
    genres: Genres[];
    totalCountOfFilmsAndYears: string[];
    favorites: number;
    awards: ObjectId[];
    bestFilms: ObjectId[];
    lastNews: string[];
    photos: string[];
    films: ObjectId[];
    comments: ObjectId[];
}
export declare const PersonSchema: mongoose.Schema<Person, mongoose.Model<Person, any, any, any, mongoose.Document<unknown, any, Person> & Person & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Person, mongoose.Document<unknown, {}, Person> & Person & {
    _id: mongoose.Types.ObjectId;
}>;
