"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteEntity = void 0;
class QuoteEntity {
    constructor(_id, _text, _whoseText) {
        this._id = _id;
        this._text = _text;
        this._whoseText = _whoseText;
    }
    get id() {
        return this._id;
    }
    get text() {
        return this._text;
    }
    get whoseText() {
        return this._whoseText;
    }
}
exports.QuoteEntity = QuoteEntity;
//# sourceMappingURL=quote.entity.js.map