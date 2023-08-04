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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("./users.repository");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const update_user_use_case_1 = require("../../domains/ports/in/update-user.use-case");
const update_user_password_use_case_1 = require("../../domains/ports/in/update-user-password.use-case");
const user_id_decorator_1 = require("../decorators/user-id.decorator");
const update_user_command_1 = require("../../domains/ports/in/update-user.command");
const update_user_dto_1 = require("./dto/update-user.dto");
const update_user_password_command_1 = require("../../domains/ports/in/update-user-password.command");
const update_user_password_dto_1 = require("./dto/update-user-password.dto");
let UsersController = exports.UsersController = class UsersController {
    constructor(_updateUserUseCase, _updateUserPasswordUseCase, usersRepository) {
        this._updateUserUseCase = _updateUserUseCase;
        this._updateUserPasswordUseCase = _updateUserPasswordUseCase;
        this.usersRepository = usersRepository;
    }
    getMe(id) {
        return this.usersRepository.findById(id);
    }
    async update(id, dto) {
        const command = new update_user_command_1.UpdateUserCommand(id, dto.email, dto.name, dto.secondName, dto.vk, dto.instagram, dto.youtube, dto.twitter, dto.facebook, dto.aboutMe, dto.avatarImage, dto.gender, dto.birthday, dto.country, dto.city, dto.favoriteGenres);
        const updUser = await this._updateUserUseCase.updateUser(command);
        return await this.usersRepository.updateUser(updUser);
    }
    async updatePassword(id, dto) {
        const command = new update_user_password_command_1.UpdateUserPasswordCommand(id, dto.password);
        const updUser = await this._updateUserPasswordUseCase.updateUserPassword(command);
        return this.usersRepository.updateUser(updUser);
    }
    search(query) {
        return this.usersRepository.search(query);
    }
};
__decorate([
    (0, common_1.Get)('/me'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getMe", null);
__decorate([
    (0, common_1.Put)('/update'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('/update/password'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_password_dto_1.UpdateUserPasswordDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updatePassword", null);
__decorate([
    (0, common_1.Get)('/search'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "search", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Users'),
    __param(0, (0, common_1.Inject)(update_user_use_case_1.UpdateUserUseCaseSymbol)),
    __param(1, (0, common_1.Inject)(update_user_password_use_case_1.UpdateUserPasswordUseCaseSymbol)),
    __metadata("design:paramtypes", [Object, Object, users_repository_1.UsersRepository])
], UsersController);
//# sourceMappingURL=users.controller.js.map