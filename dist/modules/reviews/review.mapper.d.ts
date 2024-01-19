import { ObjectId } from 'mongodb';
import { Review } from './entities/review-orm.entity';
import { ReviewEntity } from 'src/domains/entities/review.entity';
type ReviewData = {
    _id: ObjectId;
} & Review;
export declare class ReviewMapper {
    static mapToDomain(review: ReviewData): ReviewEntity;
}
export {};
