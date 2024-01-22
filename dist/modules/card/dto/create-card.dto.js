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
    (0, swagger_1.ApiProperty)({ default: '/uploads/89174998154842803430569066277532382.png' }),
    __metadata("design:type", String)
], CreateCardOrmDto.prototype, "backgroundImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '/uploads/51432660983916184341728439869629537.png' }),
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
    (0, swagger_1.ApiProperty)({
        default: [
            '64df2ff7837c1de258ca6692',
            '64df2ff7837c1de258ca6692',
            '64df2ff7837c1de258ca6692',
            '64df2ff7837c1de258ca6692',
        ],
    }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "ratings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 12 }),
    __metadata("design:type", Number)
], CreateCardOrmDto.prototype, "userLike", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 6 }),
    __metadata("design:type", Number)
], CreateCardOrmDto.prototype, "userDislike", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 16 }),
    __metadata("design:type", Number)
], CreateCardOrmDto.prototype, "favourites", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 2020 }),
    __metadata("design:type", Number)
], CreateCardOrmDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['Великобритания', 'Австралия'] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Подбери ключ к свободе' }),
    __metadata("design:type", String)
], CreateCardOrmDto.prototype, "slogan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['64d9f7b5e1110cc34cd58ede'] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "directors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['Фрэнсис Аннан', 'Л.Х. Адамс', 'Кэрол Гриффитс'] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "screenwriters", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['Фрэнсис Аннан'] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "producers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['Джеффри Холл'] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "operators", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['Дэвид Хиршфелдер'] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "composers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['Скотт Бёрд', 'Эрика Брайан', 'Мариот Керр'] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "artists", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['Ник Фентон'] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "editors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['Триллер'] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "genres", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 12808 }),
    __metadata("design:type", Number)
], CreateCardOrmDto.prototype, "collecting", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '01.03.2020' }),
    __metadata("design:type", String)
], CreateCardOrmDto.prototype, "premiereInWorld", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '14.03.2020' }),
    __metadata("design:type", String)
], CreateCardOrmDto.prototype, "premiereInRussia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 16 }),
    __metadata("design:type", Number)
], CreateCardOrmDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 106 }),
    __metadata("design:type", Number)
], CreateCardOrmDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['Arclight Films', 'Beagle Pug Films', 'Footprint Films'] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "production", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['Particular Crowd', 'Premiere Picture', 'Spier Films'] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "specialEffects", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['Пифагор'] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "dubbingStudios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['64c0c1852904a766e78609c0'] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "persons", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['/uploads/7988628819993576475282367541962714.mp4'] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "trailers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: [
            '64d9f7db7d6c1ef5e3d65bd4',
            '64d9f7db7d6c1ef5e3d65bd4',
            '64d9f7db7d6c1ef5e3d65bd4',
            '64d9f7db7d6c1ef5e3d65bd4',
        ],
    }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "awards", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: [
            '/uploads/45329756186953580859923156024825766.png',
            '/uploads/28912643286879964223053830683070.png',
            '/uploads/4822981514169208892977713968467426.png',
        ],
    }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "posters", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: [
            '/uploads/76325089178478378545283465851466884.png',
            '/uploads/402012429376383626756579103542664.png',
            '/uploads/19892496724598274573684352671344099.png',
            '/uploads/4794545304185939391003819855270432.png',
            '/uploads/3131003928685677622127495374128764.png',
            '/uploads/76956913079278755772572442219341792.png',
        ],
    }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "shots", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "sequelAndPrequels", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['64d9f6db34bf81ae805a9db8', '64d9f70e34bf81ae805a9dbb'] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "quotes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [] }),
    __metadata("design:type", Array)
], CreateCardOrmDto.prototype, "seemFilms", void 0);
//# sourceMappingURL=create-card.dto.js.map