"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReviewCommand = void 0;
class UpdateReviewCommand {
    constructor(_reviewId, _likes, _dislikes, _comments) {
        this._reviewId = _reviewId;
        this._likes = _likes;
        this._dislikes = _dislikes;
        this._comments = _comments;
    }
    get reviewId() {
        return this._reviewId;
    }
    get likes() {
        return this._likes;
    }
    get dislikes() {
        return this._dislikes;
    }
    get comments() {
        return this._comments;
    }
}
exports.UpdateReviewCommand = UpdateReviewCommand;
//# sourceMappingURL=update-review.command.js.map