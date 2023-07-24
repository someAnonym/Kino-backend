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
exports.CreateCardOrmDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateCardOrmDto {
}
exports.CreateCardOrmDto = CreateCardOrmDto;
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], CreateCardOrmDto.prototype, "posterImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Побег из Претории' }),
    __metadata("design:type", String)
], CreateCardOrmDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Escape from Pretoria' }),
    __metadata("design:type", String)
], CreateCardOrmDto.prototype, "secondName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: 'Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.',
    }),
    __metadata("design:type", String)
], CreateCardOrmDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "ratings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0 }),
    __metadata("design:type", Number)
], CreateCardOrmDto.prototype, "userLike", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0 }),
    __metadata("design:type", Number)
], CreateCardOrmDto.prototype, "userDislike", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0 }),
    __metadata("design:type", Number)
], CreateCardOrmDto.prototype, "favourites", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], CreateCardOrmDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], CreateCardOrmDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], CreateCardOrmDto.prototype, "slogan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "directors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "screenwriters", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "producers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "operators", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "composers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "artists", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "editors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "genres", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0 }),
    __metadata("design:type", Number)
], CreateCardOrmDto.prototype, "collecting", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], CreateCardOrmDto.prototype, "premiereInWorld", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], CreateCardOrmDto.prototype, "premiereInRussia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0 }),
    __metadata("design:type", Number)
], CreateCardOrmDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0 }),
    __metadata("design:type", Number)
], CreateCardOrmDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "production", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "specialEffects", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "dubbingStudios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "persons", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "trailers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "awards", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "posters", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "shots", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "sequelAndPrequels", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "quotes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "seemFilms", void 0);
//# sourceMappingURL=create-card.dto.js.map