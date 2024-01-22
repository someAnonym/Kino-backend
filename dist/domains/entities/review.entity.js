"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewEntity = void 0;
class ReviewEntity {
    constructor(_id, _user, _typeOfReview, _likes, _dislikes, _title, _date, _text, _comments, _complaints) {
        this._id = _id;
        this._user = _user;
        this._typeOfReview = _typeOfReview;
        this._likes = _likes;
        this._dislikes = _dislikes;
        this._title = _title;
        this._date = _date;
        this._text = _text;
        this._comments = _comments;
        this._complaints = _complaints;
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
    get complaints() {
        return this._complaints;
    }
    getReviewData() {
        return {
            id: this._id,
            user: this._user,
            typeOfReview: this._typeOfReview,
            likes: this._likes,
            dislikes: this._dislikes,
            title: this._title,
            date: this._date,
            text: this._text,
            comments: this._comments,
            complaints: this._complaints,
        };
    }
    updateLikes(like) {
        try {
            this._likes = this._likes + like;
        }
        catch (error) {
            throw new Error('Ошибка обновления лайков!');
        }
    }
    updateDislikes(dislike) {
        try {
            this._dislikes = this._dislikes + dislike;
        }
        catch (error) {
            throw new Error('Ошибка обновления лайков!');
        }
    }
    updateComments(comments) {
        this._comments = [...this._comments, ...comments];
    }
}
exports.ReviewEntity = ReviewEntity;
//# sourceMappingURL=review.entity.js.map