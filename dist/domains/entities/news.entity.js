"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsEntity = void 0;
class NewsEntity {
    constructor(_id, _title, _date, _looks, _comments, _picture, _text) {
        this._id = _id;
        this._title = _title;
        this._date = _date;
        this._looks = _looks;
        this._comments = _comments;
        this._picture = _picture;
        this._text = _text;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get date() {
        return this._date;
    }
    get looks() {
        return this._looks;
    }
    get comments() {
        return this._comments;
    }
    get picture() {
        return this._picture;
    }
    get text() {
        return this._text;
    }
}
exports.NewsEntity = NewsEntity;
//# sourceMappingURL=news.entity.js.map