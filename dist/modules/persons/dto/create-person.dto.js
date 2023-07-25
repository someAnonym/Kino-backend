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
exports.CreatePersonOrmDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreatePersonOrmDto {
}
exports.CreatePersonOrmDto = CreatePersonOrmDto;
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], CreatePersonOrmDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], CreatePersonOrmDto.prototype, "englishName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], CreatePersonOrmDto.prototype, "linkToBiography", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreatePersonOrmDto.prototype, "career", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], CreatePersonOrmDto.prototype, "height", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreatePersonOrmDto.prototype, "birthday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], CreatePersonOrmDto.prototype, "bornPlace", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreatePersonOrmDto.prototype, "genres", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreatePersonOrmDto.prototype, "totalCountOfFilmsAndYears", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0 }),
    __metadata("design:type", Number)
], CreatePersonOrmDto.prototype, "favorites", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreatePersonOrmDto.prototype, "awards", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreatePersonOrmDto.prototype, "bestFilms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreatePersonOrmDto.prototype, "lastNews", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreatePersonOrmDto.prototype, "photos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreatePersonOrmDto.prototype, "films", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreatePersonOrmDto.prototype, "comments", void 0);
//# sourceMappingURL=create-person.dto.js.map