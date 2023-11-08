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
exports.createCommentOrmDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class createCommentOrmDto {
}
exports.createCommentOrmDto = createCommentOrmDto;
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], createCommentOrmDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0 }),
    __metadata("design:type", Number)
], createCommentOrmDto.prototype, "likes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0 }),
    __metadata("design:type", Number)
], createCommentOrmDto.prototype, "dislikes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], createCommentOrmDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: Date.now() }),
    __metadata("design:type", Date)
], createCommentOrmDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], createCommentOrmDto.prototype, "comments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], createCommentOrmDto.prototype, "complaints", void 0);
//# sourceMappingURL=create-comment.dto.js.map