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
exports.DirectorsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const directors_repository_1 = require("./directors.repository");
const create_director_orm_dto_1 = require("./dto/create-director-orm.dto");
let DirectorsController = exports.DirectorsController = class DirectorsController {
    constructor(_directorsRepository) {
        this._directorsRepository = _directorsRepository;
    }
    getAll() {
        return this._directorsRepository.getAll();
    }
    getOne(id) {
        return this._directorsRepository.getDirecorById(id);
    }
    create(dto) {
        return this._directorsRepository.createDirector(dto);
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DirectorsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DirectorsController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_director_orm_dto_1.CreateDirectorOrmDto]),
    __metadata("design:returntype", void 0)
], DirectorsController.prototype, "create", null);
exports.DirectorsController = DirectorsController = __decorate([
    (0, swagger_1.ApiTags)('Directors'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('directors'),
    __metadata("design:paramtypes", [directors_repository_1.DirectorsRepository])
], DirectorsController);
//# sourceMappingURL=directors.controller.js.map