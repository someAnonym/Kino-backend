"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReviewService = void 0;
class UpdateReviewService {
    constructor(_reviewRepositoryPort) {
        this._reviewRepositoryPort = _reviewRepositoryPort;
    }
    async updateReview(command) {
        const review = await this._reviewRepositoryPort.loadReview(command.reviewId);
        review.updateLikes(command.likes);
        review.updateDislikes(command.dislikes);
        review.updateComments(command.comments);
        return await this._reviewRepositoryPort.update(review);
    }
}
exports.UpdateReviewService = UpdateReviewService;
//# sourceMappingURL=update-review.service.js.map