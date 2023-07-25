import * as mongoose from 'mongoose';
export type AwardDocument = Award & Document;
export declare class Award {
    picture: string;
    name: string;
    description: string;
    year: number;
}
export declare const AwardSchema: mongoose.Schema<Award, mongoose.Model<Award, any, any, any, mongoose.Document<unknown, any, Award> & Award & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Award, mongoose.Document<unknown, {}, Award> & Award & {
    _id: mongoose.Types.ObjectId;
}>;
