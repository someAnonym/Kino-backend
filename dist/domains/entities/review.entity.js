"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewEntity = void 0;
class ReviewEntity {
    constructor(_id, _user, _typeOfReview, _likes, _dislikes, _title, _date, _text, _comments, _link, _complaint, _answer) {
        this._id = _id;
        this._user = _user;
        this._typeOfReview = _typeOfReview;
        this._likes = _likes;
        this._dislikes = _dislikes;
        this._title = _title;
        this._date = _date;
        this._text = _text;
        this._comments = _comments;
        this._link = _link;
        this._complaint = _complaint;
        this._answer = _answer;
    }
    get id() {
        return this._id;
    }
    get user() {
        return this._user;
    }
    get typeOfReview() {
        return this._typeOfReview;
    }
    get likes() {
        return this._likes;
    }
    get dislikes() {
        return this._dislikes;
    }
    get title() {
        return this._title;
    }
    get date() {
        return this._date;
    }
    get text() {
        return this._text;
    }
    get comments() {
        return this._comments;
    }
    get link() {
        return this._link;
    }
    get complaint() {
        return this._complaint;
    }
    get answer() {
        return this?._answer;
    }
}
exports.ReviewEntity = ReviewEntity;
//# sourceMappingURL=review.entity.js.map