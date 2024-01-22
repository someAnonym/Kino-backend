import { ReviewEntity } from '../entities/review.entity';
import { UpdateReviewCommand } from '../ports/in/update-review.command';
import { ReviewRepositoryPort } from '../ports/out/review-repository.port';

export class UpdateReviewService {
  constructor(private readonly _reviewRepositoryPort: ReviewRepositoryPort) {}

  async updateReview(command: UpdateReviewCommand): Promise<ReviewEntity> {
    const review: ReviewEntity = await this._reviewRepositoryPort.loadReview(command.reviewId);
    review.updateLikes(command.likes);
    review.updateDislikes(command.dislikes);
    review.updateComments(command.comments);

    return await this._reviewRepositoryPort.update(review);
  }
}
