"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommentService = void 0;
class UpdateCommentService {
    constructor(_commentRepositoryPort) {
        this._commentRepositoryPort = _commentRepositoryPort;
    }
    async updateComment(command) {
        const comment = await this._commentRepositoryPort.loadComment(command.commentId);
        comment.updateComments(command.comments);
        comment.updateLikes(command.likes);
        comment.updateDislikes(command.dislikes);
        await this._commentRepositoryPort.updateComm(comment);
        return comment;
    }
}
exports.UpdateCommentService = UpdateCommentService;
//# sourceMappingURL=update-comment.service.js.map