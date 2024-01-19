import { ObjectId } from 'mongodb';
import { Review } from './entities/review-orm.entity';
import { ReviewEntity } from 'src/domains/entities/review.entity';

type ReviewData = { _id: ObjectId } & Review;

export class ReviewMapper {
  static mapToDomain(review: ReviewData): ReviewEntity {
    const id = review._id.valueOf() as string;
    const user = review.user.valueOf() as string;
    const comments = review.comments.map((i) => i.valueOf() as string);
    return new ReviewEntity(
      id,
      user,
      review.typeOfReview,
      review.likes,
      review.dislikes,
      review.title,
      review.date,
      review.text,
      comments,
      review.complaints,
    );
  }
}
