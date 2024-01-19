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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdateUserDto {
}
exports.UpdateUserDto = UpdateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'test@test.test' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'vk.com' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "vk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'facebook.com' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "facebook", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'instagram.com' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "instagram", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'twitter.com' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "twitter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'youtube.com' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "youtube", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Дмитрий' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Foki' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "secondName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'he he' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "aboutMe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "avatarImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'man' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '15.11.2004' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "birthday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Moskow' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Russia' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], UpdateUserDto.prototype, "favoriteGenres", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "person", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "favoriteFilm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "likedFilm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "dislikedFilm", void 0);
//# sourceMappingURL=update-user.dto.js.map