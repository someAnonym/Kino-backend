"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentMapper = void 0;
const comment_entity_1 = require("../../domains/entities/comment.entity");
class CommentMapper {
    static mapToDomain(comment) {
        const id = comment._id.valueOf();
        const user = comment.user.valueOf();
        const comments = comment.comments.map((i) => i.valueOf());
        return new comment_entity_1.CommentEntity(id, user, comment.likes, comment.dislikes, comment.title, comment.date, comment.text, comments, comment.complaints);
    }
}
exports.CommentMapper = CommentMapper;
//# sourceMappingURL=comment.mapper.js.map