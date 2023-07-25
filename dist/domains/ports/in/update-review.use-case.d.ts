import { ReviewEntity } from 'src/domains/entities/review.entity';
import { UpdateReviewCommand } from './update-review.command';
export declare const UpdateReviewUseCaseSymbol: unique symbol;
export interface UpdateReviewUseCase {
    UpdateReview(command: UpdateReviewCommand): Promise<ReviewEntity>;
}
