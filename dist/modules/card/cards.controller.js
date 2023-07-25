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
exports.CardsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const update_card_dto_1 = require("./dto/update-card.dto");
const update_card_command_1 = require("../../domains/ports/in/update-card.command");
const cards_repository_1 = require("./cards.repository");
const update_card_use_case_1 = require("../../domains/ports/in/update-card.use-case");
const create_card_dto_1 = require("./dto/create-card.dto");
let CardsController = exports.CardsController = class CardsController {
    constructor(_updateCardUseCase, cardsRepository) {
        this._updateCardUseCase = _updateCardUseCase;
        this.cardsRepository = cardsRepository;
    }
    getMe(id) {
        return this.cardsRepository.findById(id);
    }
    async update(id, dto) {
        const command = new update_card_command_1.UpdateCardCommand(id, dto._reviews, dto._likes, dto._dislikes, dto._favorites);
        const updateCard = await this._updateCardUseCase.UpdateCard(command);
        return await this.cardsRepository.updateCard(updateCard);
    }
    async create(dto) {
        return await this.cardsRepository.create(dto);
    }
};
__decorate([
    (0, common_1.Get)('/currentCard'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CardsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Put)('/update'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_card_dto_1.UpdateCardDto]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_card_dto_1.CreateCardOrmDto]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "create", null);
exports.CardsController = CardsController = __decorate([
    (0, common_1.Controller)('cards'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Cards'),
    __param(0, (0, common_1.Inject)(update_card_use_case_1.UpdateCardUseCaseSymbol)),
    __metadata("design:paramtypes", [Object, cards_repository_1.CardsRepository])
], CardsController);
//# sourceMappingURL=cards.controller.js.map