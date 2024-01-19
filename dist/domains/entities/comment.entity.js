"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentEntity = void 0;
class CommentEntity {
    constructor(_id, _user, _likes, _dislikes, _date, _text, _comments, _complaints) {
        this._id = _id;
        this._user = _user;
        this._likes = _likes;
        this._dislikes = _dislikes;
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
    get likes() {
        return this._likes;
    }
    get dislikes() {
        return this._dislikes;
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
    updateComments(comments) {
        try {
            return (this._comments = [...this._comments, ...comments]);
        }
        catch (error) {
            console.warn('Ошибка при изменении комментариев комментария', error);
        }
    }
    updateLikes(likes) {
        return (this._likes = likes);
    }
    updateDislikes(dislikes) {
        return (this._dislikes = dislikes);
    }
    getCommentData() {
        return {
            id: this._id,
            user: this._user,
            likes: this._likes,
            dislikes: this._dislikes,
            date: this._date,
            text: this._text,
            comments: this._comments,
            complaints: this._complaints,
        };
    }
}
exports.CommentEntity = CommentEntity;
//# sourceMappingURL=comment.entity.js.map