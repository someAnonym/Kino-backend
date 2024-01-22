"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewMapper = void 0;
const review_entity_1 = require("../../domains/entities/review.entity");
class ReviewMapper {
    static mapToDomain(review) {
        const id = review._id.valueOf();
        const user = review.user.valueOf();
        const comments = review.comments.map((i) => i.valueOf());
        return new review_entity_1.ReviewEntity(id, user, review.typeOfReview, review.likes, review.dislikes, review.title, review.date, review.text, comments, review.complaints);
    }
}
exports.ReviewMapper = ReviewMapper;
//# sourceMappingURL=review.mapper.js.map