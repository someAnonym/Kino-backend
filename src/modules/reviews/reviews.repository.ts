import { InjectModel } from '@nestjs/mongoose';
import { ReviewEntity } from 'src/domains/entities/review.entity';
import {
  CreateReviewDto,
  ReviewRepositoryPort,
} from 'src/domains/ports/out/review-repository.port';
import { Review, ReviewDocument } from './entities/review-orm.entity';
import { Model } from 'mongoose';
import { ReviewMapper } from './review.mapper';

export class ReviewsRepository implements ReviewRepositoryPort {
  constructor(@InjectModel(Review.name) private repository: Model<ReviewDocument>) {}

  async loadReview(reviewId: string): Promise<ReviewEntity> {
    const review = await this.repository.findById(reviewId);

    return ReviewMapper.mapToDomain(review);
  }

  async update(review: ReviewEntity) {
    try {
      const updatedReview = review.getReviewData();
      const currentReview = await this.repository.findById(review.id);

      currentReview.likes = updatedReview.likes;
      currentReview.dislikes = updatedReview.dislikes;
      currentReview.comments = updatedReview.comments;

      return this.repository.findByIdAndUpdate(currentReview._id, currentReview);
    } catch (error) {
      console.warn(error);
    }
  }

  delete(reviewId: string) {
    return this.repository.findByIdAndRemove(reviewId);
  }

  getOneById(id: string) {
    return this.repository.findById(id);
  }

  getAll() {
    return this.repository.find();
  }

  create(dto: CreateReviewDto) {
    return this.repository.create(dto);
  }
}
