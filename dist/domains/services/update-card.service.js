"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCardService = void 0;
class UpdateCardService {
    constructor(_cardRepository) {
        this._cardRepository = _cardRepository;
    }
    async UpdateCard(command) {
        const card = await this._cardRepository.loadCard(command.cardId);
        card.updateDislikes(command.dislikes);
        card.updateFavorite(command.favorites);
        card.updateLikes(command.likes);
        card.updateReviews(command.reviews);
        await this._cardRepository.updateCard(card);
        return card;
    }
}
exports.UpdateCardService = UpdateCardService;
//# sourceMappingURL=update-card.service.js.map