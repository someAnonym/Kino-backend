"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingEntity = void 0;
class RatingEntity {
    constructor(_id, _rate, _whoose) {
        this._id = _id;
        this._rate = _rate;
        this._whoose = _whoose;
    }
    get id() {
        return this._id;
    }
    get rate() {
        return this._rate;
    }
    get whoose() {
        return this._whoose;
    }
}
exports.RatingEntity = RatingEntity;
//# sourceMappingURL=rating.entity.js.map