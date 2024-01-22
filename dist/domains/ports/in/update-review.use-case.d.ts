import { ReviewEntity } from 'src/domains/entities/review.entity';
import { UpdateReviewCommand } from './update-review.command';
export declare const UpdateReviewUseCaseSymbol: unique symbol;
export interface UpdateReviewUseCase {
    updateReview(command: UpdateReviewCommand): Promise<ReviewEntity>;
}
