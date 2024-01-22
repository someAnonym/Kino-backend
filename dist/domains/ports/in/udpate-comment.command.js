"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommentCommand = void 0;
class UpdateCommentCommand {
    constructor(_commentId, _comments, _likes, _dislikes) {
        this._commentId = _commentId;
        this._comments = _comments;
        this._likes = _likes;
        this._dislikes = _dislikes;
    }
    get commentId() {
        return this._commentId;
    }
    get comments() {
        return this._comments;
    }
    get likes() {
        return this._likes;
    }
    get dislikes() {
        return this._dislikes;
    }
}
exports.UpdateCommentCommand = UpdateCommentCommand;
//# sourceMappingURL=udpate-comment.command.js.map