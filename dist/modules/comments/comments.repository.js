"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const comment_orm_entity_1 = require("./entities/comment-orm.entity");
const comment_mapper_1 = require("./comment.mapper");
let CommentsRepository = exports.CommentsRepository = class CommentsRepository {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return this.repository.create(dto);
    }
    async updateComm(comment) {
        try {
            const mongoose = require('mongoose');
            const updatedComment = comment.getCommentData();
            const currentComment = await this.repository.findById(updatedComment.id);
            currentComment.likes = updatedComment.likes;
            currentComment.text = updatedComment.text;
            currentComment.dislikes = updatedComment.dislikes;
            currentComment.comments = updatedComment.comments.map((i) => new mongoose.Types.ObjectId(i));
            await currentComment.save();
            return currentComment;
        }
        catch (error) {
            console.log(error);
            throw new common_1.ForbiddenException('Ошибка при обновлении Комментария', error);
        }
    }
    delete(CommentId) {
        return this.repository.findByIdAndDelete(CommentId);
    }
    getOneById(id) {
        return this.repository.findById(id);
    }
    getAll() {
        return this.repository.find();
    }
    async loadComment(commentId) {
        const comment = await this.repository.findById(commentId);
        return comment_mapper_1.CommentMapper.mapToDomain(comment);
    }
};
exports.CommentsRepository = CommentsRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(comment_orm_entity_1.Comment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CommentsRepository);
//# sourceMappingURL=comments.repository.js.map