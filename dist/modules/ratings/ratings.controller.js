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
exports.RatingsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ratings_repository_1 = require("./ratings.repository");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const create_rating_orm_dto_1 = require("./dto/create-rating-orm.dto");
let RatingsController = exports.RatingsController = class RatingsController {
    constructor(_ratingsRepository) {
        this._ratingsRepository = _ratingsRepository;
    }
    getAll() {
        return this._ratingsRepository.getAll();
    }
    getOne(id) {
        return this._ratingsRepository.getRatingById(id);
    }
    create(dto) {
        return this._ratingsRepository.createRating(dto);
    }
    deleteOne(id) {
        return this._ratingsRepository.deleteRating(id);
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RatingsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RatingsController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rating_orm_dto_1.CreateRatingOrmDto]),
    __metadata("design:returntype", void 0)
], RatingsController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RatingsController.prototype, "deleteOne", null);
exports.RatingsController = RatingsController = __decorate([
    (0, common_1.Controller)('ratings'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Ratings'),
    __metadata("design:paramtypes", [ratings_repository_1.RatingsRepository])
], RatingsController);
//# sourceMappingURL=ratings.controller.js.map