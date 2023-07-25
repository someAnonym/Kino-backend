import { ReviewEntity } from 'src/domains/entities/review.entity';
import { UpdateReviewCommand } from './update-review.command';

export const UpdateReviewUseCaseSymbol = Symbol('UpdateReviewUseCase');
export interface UpdateReviewUseCase {
  UpdateReview(command: UpdateReviewCommand): Promise<ReviewEntity>;
}
