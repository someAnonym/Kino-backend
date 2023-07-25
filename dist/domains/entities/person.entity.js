"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonEntity = void 0;
class PersonEntity {
    constructor(_id, _name, _englishName, _linkToBiography, _career, _height, _birthday, _bornPlace, _genres, _totalCountOfFilmsAndYears, _favorites, _awards, _bestFilms, _lastNews, _photos, _films, _comments) {
        this._id = _id;
        this._name = _name;
        this._englishName = _englishName;
        this._linkToBiography = _linkToBiography;
        this._career = _career;
        this._height = _height;
        this._birthday = _birthday;
        this._bornPlace = _bornPlace;
        this._genres = _genres;
        this._totalCountOfFilmsAndYears = _totalCountOfFilmsAndYears;
        this._favorites = _favorites;
        this._awards = _awards;
        this._bestFilms = _bestFilms;
        this._lastNews = _lastNews;
        this._photos = _photos;
        this._films = _films;
        this._comments = _comments;
    }
    get id() {
        return this._id;
    }
    get englishName() {
        return this._englishName;
    }
    get linkToBiography() {
        return this._linkToBiography;
    }
    get career() {
        return this._career;
    }
    get height() {
        return this._height;
    }
    get birthday() {
        return this._birthday;
    }
    get bornPlace() {
        return this._bornPlace;
    }
    get genres() {
        return this._genres;
    }
    get totalCountOfFilmsAndYears() {
        return this._totalCountOfFilmsAndYears;
    }
    get favorites() {
        return this._favorites;
    }
    get awards() {
        return this._awards;
    }
    get bestFilms() {
        return this._bestFilms;
    }
    get lastNews() {
        return this._lastNews;
    }
    get photos() {
        return this._photos;
    }
    get films() {
        return this._films;
    }
    get comments() {
        return this._comments;
    }
    getData() {
        return {
            id: this._id,
            name: this._name,
            englishName: this._englishName,
            linkToBiography: this._linkToBiography,
            career: this._career,
            height: this._height,
            birthday: this._birthday,
            bornPlace: this._bornPlace,
            genres: this._genres,
            totalCountOfFilmsAndYears: this._totalCountOfFilmsAndYears,
            favorites: this._favorites,
            awards: this._awards,
            bestFilms: this._bestFilms,
            lastNews: this._lastNews,
            photos: this._photos,
            films: this._films,
            comments: this._comments,
        };
    }
    updateComments(comments) {
        try {
            this._comments = [...this._comments, ...comments];
        }
        catch (error) {
            throw new Error('Ошибка обновления комментариев!');
        }
    }
}
exports.PersonEntity = PersonEntity;
//# sourceMappingURL=person.entity.js.map