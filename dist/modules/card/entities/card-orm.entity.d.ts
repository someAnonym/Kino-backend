import { ObjectId } from 'mongodb';
import { Genres } from 'src/modules/users/entities/genges.entity';
import * as mongoose from 'mongoose';
export type CardDocument = Card & Document;
export declare class Card {
    posterImage: string;
    reviews: string[];
    name: string;
    secondName: string;
    ratings: string[];
    userLike: number;
    userDislike: number;
    favorites: number;
    year: number;
    country: string;
    slogan: string;
    directors: string[];
    screenwriters: string[];
    producers: string[];
    operators: string[];
    composers: string[];
    artists: string[];
    editors: string[];
    genres: Genres[];
    collecting: number;
    premiereInWorld: string;
    premiereInRussia: string;
    age: number;
    duration: number;
    production: string[];
    specialEffects: string[];
    dubbingStudios: string[];
    persons: string[];
    trailers: string[];
    awards: ObjectId[];
    posters: string[];
    shots: string[];
    sequelAndPrequels: ObjectId[];
    quotes: string[];
    seemFilms: ObjectId[];
    description: string;
}
export declare const CardSchema: mongoose.Schema<Card, mongoose.Model<Card, any, any, any, mongoose.Document<unknown, any, Card> & Card & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Card, mongoose.Document<unknown, {}, Card> & Card & {
    _id: mongoose.Types.ObjectId;
}>;
