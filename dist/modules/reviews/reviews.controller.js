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
exports.ReviewController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const update_review_use_case_1 = require("../../domains/ports/in/update-review.use-case");
const reviews_repository_1 = require("./reviews.repository");
const create_review_dto_1 = require("./dto/create-review.dto");
const update_review_dto_1 = require("./dto/update-review.dto");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const update_review_command_1 = require("../../domains/ports/in/update-review.command");
let ReviewController = exports.ReviewController = class ReviewController {
    constructor(_updateReviewUseCase, _reviewsRepository) {
        this._updateReviewUseCase = _updateReviewUseCase;
        this._reviewsRepository = _reviewsRepository;
    }
    getAll() {
        return this._reviewsRepository.getAll().populate('user');
    }
    getOne(id) {
        return this._reviewsRepository
            .getOneById(id)
            .populate('user', 'avatarImage reviews name secondName');
    }
    async create(dto) {
        return (await this._reviewsRepository.create(dto)).populate('user');
    }
    async update(id, dto) {
        const command = new update_review_command_1.UpdateReviewCommand(id, dto.likes, dto.dislikes, dto.comments);
        const updatedReviewEntity = await this._updateReviewUseCase.updateReview(command);
        const updatedReview = await this._reviewsRepository.getOneById(updatedReviewEntity.id);
        return updatedReview.populate('user', 'avatarImage reviews name secondName');
    }
    delete(id) {
        return this._reviewsRepository.delete(id);
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_review_dto_1.CreateReviewOrmDto]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_review_dto_1.UpdateReviewOrmDto]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "delete", null);
exports.ReviewController = ReviewController = __decorate([
    (0, common_1.Controller)('reviews'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Reviews'),
    __param(0, (0, common_1.Inject)(update_review_use_case_1.UpdateReviewUseCaseSymbol)),
    __metadata("design:paramtypes", [Object, reviews_repository_1.ReviewsRepository])
], ReviewController);
//# sourceMappingURL=reviews.controller.js.map