"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCardCommand = void 0;
class UpdateCardCommand {
    constructor(_cardId, _reviews, _likes, _dislikes, _favorites) {
        this._cardId = _cardId;
        this._reviews = _reviews;
        this._likes = _likes;
        this._dislikes = _dislikes;
        this._favorites = _favorites;
    }
    get cardId() {
        return this._cardId;
    }
    get favorites() {
        return this._favorites;
    }
    get reviews() {
        return this._reviews;
    }
    get likes() {
        return this._likes;
    }
    get dislikes() {
        return this._dislikes;
    }
}
exports.UpdateCardCommand = UpdateCardCommand;
//# sourceMappingURL=update-card.command.js.map