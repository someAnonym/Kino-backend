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
exports.CardsRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const card_mapper_1 = require("./card.mapper");
const card_orm_entity_1 = require("./entities/card-orm.entity");
let CardsRepository = exports.CardsRepository = class CardsRepository {
    constructor(repository) {
        this.repository = repository;
    }
    async loadCard(cardId) {
        const card = await this.repository.findById(cardId);
        return card_mapper_1.CardMapper.mapToDomain(card);
    }
    async updateCard(card) {
        try {
            const updatedCard = card.getCardData();
            const currentCard = await this.repository.findById(card.id);
            currentCard.reviews = updatedCard.reviews;
            currentCard.userLike = updatedCard.userLike;
            currentCard.userDislike = updatedCard.userDislike;
            currentCard.favorites = updatedCard.favourites;
            return this.repository.findOneAndUpdate(currentCard._id, currentCard);
        }
        catch (error) {
            throw new common_1.ForbiddenException('Ошибка при обновлении Карточки', error);
        }
    }
    create(dto) {
        console.log(1);
        return this.repository.create(dto);
    }
    findById(id) {
        return this.repository.findById(id);
    }
};
exports.CardsRepository = CardsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(card_orm_entity_1.Card.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CardsRepository);
//# sourceMappingURL=cards.repository.js.map