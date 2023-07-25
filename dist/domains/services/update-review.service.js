"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReviewService = void 0;
class UpdateReviewService {
    constructor(_reviewRepositoryPort) {
        this._reviewRepositoryPort = _reviewRepositoryPort;
    }
    async updatePerson(command) {
        const review = this._reviewRepositoryPort.loadReview(command.reviewId);
        review.updateLikes(command.likes);
        review.updateDislikes(command.dislikes);
        review.updateComments(command.comments);
        await this._reviewRepositoryPort.update(review);
        return review;
    }
}
exports.UpdateReviewService = UpdateReviewService;
//# sourceMappingURL=update-review.service.js.map