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
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const update_comment_use_case_1 = require("../../domains/ports/in/update-comment.use-case");
const comments_repository_1 = require("./comments.repository");
const create_comment_dto_1 = require("./dto/create-comment.dto");
const update_comment_dto_1 = require("./dto/update-comment.dto");
const udpate_comment_command_1 = require("../../domains/ports/in/udpate-comment.command");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
let CommentsController = exports.CommentsController = class CommentsController {
    constructor(_updateCommentUseCase, _commentsRepository) {
        this._updateCommentUseCase = _updateCommentUseCase;
        this._commentsRepository = _commentsRepository;
    }
    async create(dto) {
        return await (await this._commentsRepository.create(dto)).populate('user');
    }
    getAll() {
        return this._commentsRepository.getAll();
    }
    getOne(id) {
        return this._commentsRepository
            .getOneById(id)
            .populate('user')
            .populate('comments')
            .populate('comments', 'user')
            .populate({
            path: 'comments',
            populate: {
                path: 'user',
            },
        })
            .populate({
            path: 'comments',
            populate: {
                path: 'comments user',
            },
        });
    }
    async update(id, dto) {
        const command = new udpate_comment_command_1.UpdateCommentCommand(id, dto.comments, dto.likes, dto.dislikes);
        const updatedComment = await this._updateCommentUseCase.updateComment(command);
        return await (await (await (await (await this._commentsRepository.updateComm(updatedComment)).populate('user')).populate('comments')).populate({
            path: 'comments',
            populate: {
                path: 'user',
            },
        })).populate({
            path: 'comments',
            populate: {
                path: 'comments user',
            },
        });
    }
    delete(id) {
        return this._commentsRepository.delete(id);
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_dto_1.createCommentOrmDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/all'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_comment_dto_1.UpdateCommentsOrmDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "delete", null);
exports.CommentsController = CommentsController = __decorate([
    (0, common_1.Controller)('comments'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Comments'),
    __param(0, (0, common_1.Inject)(update_comment_use_case_1.UpdateCommentUseCaseSymbol)),
    __metadata("design:paramtypes", [Object, comments_repository_1.CommentsRepository])
], CommentsController);
//# sourceMappingURL=comments.controller.js.map