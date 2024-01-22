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
exports.AwardsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const awards_repository_1 = require("./awards.repository");
const create_award_dto_1 = require("./dto/create-award.dto");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
let AwardsController = exports.AwardsController = class AwardsController {
    constructor(_awardsRepository) {
        this._awardsRepository = _awardsRepository;
    }
    getAll() {
        return this._awardsRepository.getAll();
    }
    create(dto) {
        return this._awardsRepository.create(dto);
    }
    delete(id) {
        return this._awardsRepository.deleteAward(id);
    }
    getAward(id) {
        return this._awardsRepository.getOneById(id);
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AwardsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_award_dto_1.CreateAwardOrmDto]),
    __metadata("design:returntype", void 0)
], AwardsController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AwardsController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AwardsController.prototype, "getAward", null);
exports.AwardsController = AwardsController = __decorate([
    (0, common_1.Controller)('awards'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Awards'),
    __metadata("design:paramtypes", [awards_repository_1.AwardsRepository])
], AwardsController);
//# sourceMappingURL=awards.controller.js.map