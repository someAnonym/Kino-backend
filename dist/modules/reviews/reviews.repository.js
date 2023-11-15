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
exports.ReviewsRepository = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const review_orm_entity_1 = require("./entities/review-orm.entity");
const mongoose_2 = require("mongoose");
const review_mapper_1 = require("./review.mapper");
let ReviewsRepository = exports.ReviewsRepository = class ReviewsRepository {
    constructor(repository) {
        this.repository = repository;
    }
    async loadReview(reviewId) {
        const review = await this.repository.findById(reviewId);
        return review_mapper_1.ReviewMapper.mapToDomain(review);
    }
    async update(review) {
        try {
            const updatedReview = review.getReviewData();
            const currentReview = await this.repository.findById(review.id);
            currentReview.likes = updatedReview.likes;
            currentReview.dislikes = updatedReview.dislikes;
            currentReview.comments = updatedReview.comments;
            return this.repository.findByIdAndUpdate(currentReview._id, currentReview);
        }
        catch (error) {
            console.warn(error);
        }
    }
    delete(reviewId) {
        return this.repository.findByIdAndRemove(reviewId);
    }
    getOneById(id) {
        return this.repository.findById(id);
    }
    getAll() {
        return this.repository.find();
    }
    create(dto) {
        return this.repository.create(dto);
    }
};
exports.ReviewsRepository = ReviewsRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(review_orm_entity_1.Review.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReviewsRepository);
//# sourceMappingURL=reviews.repository.js.map