import { ReviewEntity } from '../entities/review.entity';
import { UpdateReviewCommand } from '../ports/in/update-review.command';
import { ReviewRepositoryPort } from '../ports/out/review-repository.port';
export declare class UpdateReviewService {
    private readonly _reviewRepositoryPort;
    constructor(_reviewRepositoryPort: ReviewRepositoryPort);
    updateReview(command: UpdateReviewCommand): Promise<ReviewEntity>;
}
