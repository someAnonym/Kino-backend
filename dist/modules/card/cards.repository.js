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
const mongodb_1 = require("mongodb");
const reviews_repository_1 = require("../reviews/reviews.repository");
let CardsRepository = exports.CardsRepository = class CardsRepository {
    constructor(repository, reviewsRepository) {
        this.repository = repository;
        this.reviewsRepository = reviewsRepository;
    }
    async loadCard(cardId) {
        const card = await this.repository.findById(cardId);
        return card_mapper_1.CardMapper.mapToDomain(card);
    }
    async updateCard(card) {
        try {
            const updatedCard = card.getCardData();
            const currentCard = await this.repository.findById(card.id);
            currentCard.reviews = updatedCard.reviews.map((i) => new mongodb_1.ObjectId(i));
            currentCard.userLike = updatedCard.userLike;
            currentCard.userDislike = updatedCard.userDislike;
            currentCard.favorites = updatedCard.favourites;
            await currentCard.save();
            return currentCard;
        }
        catch (error) {
            console.log(error);
            throw new common_1.ForbiddenException('Ошибка при обновлении Карточки', error);
        }
    }
    create(dto) {
        return this.repository.create(dto);
    }
    findById(id) {
        return this.repository.findById(id);
    }
    async search(query) {
        const cards = await this.repository.find().populate('ratings', 'whoose rate');
        return [
            ...cards.filter((i) => i.name.toLowerCase().includes(query.toLowerCase())),
            ...cards.filter((i) => i.secondName.toLowerCase().includes(query.toLowerCase())),
        ];
    }
    async filterReviews(cardId, typeOfReview) {
        const card = await this.repository.findById(cardId);
        const reviews = this.reviewsRepository.getAll().populate('user');
        const filter = (await reviews).filter((i) => i.typeOfReview === typeOfReview && card.reviews.includes(i._id));
        return filter;
    }
    delete(cardId) {
        return this.repository.findByIdAndDelete(cardId);
    }
    getAll() {
        return this.repository.find();
    }
};
exports.CardsRepository = CardsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(card_orm_entity_1.Card.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        reviews_repository_1.ReviewsRepository])
], CardsRepository);
//# sourceMappingURL=cards.repository.js.map