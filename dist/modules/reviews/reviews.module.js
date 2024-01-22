"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const review_orm_entity_1 = require("./entities/review-orm.entity");
const reviews_controller_1 = require("./reviews.controller");
const reviews_repository_1 = require("./reviews.repository");
const update_review_use_case_1 = require("../../domains/ports/in/update-review.use-case");
const update_review_service_1 = require("../../domains/services/update-review.service");
let ReviewsModule = exports.ReviewsModule = class ReviewsModule {
};
exports.ReviewsModule = ReviewsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: review_orm_entity_1.Review.name, schema: review_orm_entity_1.ReviewSchema }])],
        controllers: [reviews_controller_1.ReviewController],
        exports: [reviews_repository_1.ReviewsRepository],
        providers: [
            reviews_repository_1.ReviewsRepository,
            {
                provide: update_review_use_case_1.UpdateReviewUseCaseSymbol,
                useClass: update_review_service_1.UpdateReviewService,
            },
            {
                provide: update_review_use_case_1.UpdateReviewUseCaseSymbol,
                useFactory: (_reviewRepository) => {
                    return new update_review_service_1.UpdateReviewService(_reviewRepository);
                },
                inject: [reviews_repository_1.ReviewsRepository],
            },
        ],
    })
], ReviewsModule);
//# sourceMappingURL=reviews.module.js.map