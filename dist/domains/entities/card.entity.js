"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardEntity = void 0;
class CardEntity {
    constructor(_id, _posterImage, _backgroundImage, _reviews, _name, _secondName, _ratings, _userLike, _userDislike, _favourites, _year, _country, _slogan, _directors, _screenwriters, _producers, _operators, _composers, _artists, _editors, _genres, _collecting, _premiereInWorld, _premiereInRussia, _age, _duration, _production, _specialEffects, _dubbingStudios, _persons, _trailers, _awards, _posters, _shots, _sequelAndPrequels, _quotes, _seemFilms, _description) {
        this._id = _id;
        this._posterImage = _posterImage;
        this._backgroundImage = _backgroundImage;
        this._reviews = _reviews;
        this._name = _name;
        this._secondName = _secondName;
        this._ratings = _ratings;
        this._userLike = _userLike;
        this._userDislike = _userDislike;
        this._favourites = _favourites;
        this._year = _year;
        this._country = _country;
        this._slogan = _slogan;
        this._directors = _directors;
        this._screenwriters = _screenwriters;
        this._producers = _producers;
        this._operators = _operators;
        this._composers = _composers;
        this._artists = _artists;
        this._editors = _editors;
        this._genres = _genres;
        this._collecting = _collecting;
        this._premiereInWorld = _premiereInWorld;
        this._premiereInRussia = _premiereInRussia;
        this._age = _age;
        this._duration = _duration;
        this._production = _production;
        this._specialEffects = _specialEffects;
        this._dubbingStudios = _dubbingStudios;
        this._persons = _persons;
        this._trailers = _trailers;
        this._awards = _awards;
        this._posters = _posters;
        this._shots = _shots;
        this._sequelAndPrequels = _sequelAndPrequels;
        this._quotes = _quotes;
        this._seemFilms = _seemFilms;
        this._description = _description;
    }
    get id() {
        return this._id;
    }
    get description() {
        return this._description;
    }
    get posterImage() {
        return this._posterImage;
    }
    get name() {
        return this._name;
    }
    get reviews() {
        return this._reviews;
    }
    get backgroundImage() {
        return this._backgroundImage;
    }
    get secondName() {
        return this._secondName;
    }
    get ratings() {
        return this._ratings;
    }
    get userLike() {
        return this._userLike;
    }
    get userDislike() {
        return this._userDislike;
    }
    get favourites() {
        return this._favourites;
    }
    get year() {
        return this._year;
    }
    get country() {
        return this._country;
    }
    get slogan() {
        return this._slogan;
    }
    get directors() {
        return this._directors;
    }
    get screenwriters() {
        return this._screenwriters;
    }
    get producers() {
        return this._producers;
    }
    get operators() {
        return this._operators;
    }
    get composers() {
        return this._composers;
    }
    get artisrs() {
        return this._artists;
    }
    get editors() {
        return this._editors;
    }
    get genres() {
        return this._genres;
    }
    get collecting() {
        return this._collecting;
    }
    get premiereInWorld() {
        return this._premiereInWorld;
    }
    get premiereInRussia() {
        return this._premiereInRussia;
    }
    get age() {
        return this._age;
    }
    get duration() {
        return this._duration;
    }
    get production() {
        return this._production;
    }
    get specialEffects() {
        return this._specialEffects;
    }
    get dubbingStudios() {
        return this._dubbingStudios;
    }
    get persons() {
        return this._persons;
    }
    get trailers() {
        return this._trailers;
    }
    get awards() {
        return this._awards;
    }
    get posters() {
        return this._posters;
    }
    get shots() {
        return this._shots;
    }
    get sequelAndPrequels() {
        return this._sequelAndPrequels;
    }
    get quotes() {
        return this._quotes;
    }
    get seemFilms() {
        return this._seemFilms;
    }
    updateFavorite(favorite) {
        try {
            this._favourites = favorite;
        }
        catch (err) {
            throw new Error('Ошибка при изменении избранных!');
        }
    }
    updateLikes(like) {
        try {
            this._userLike = like;
        }
        catch (err) {
            throw new Error('Ошибка при изменении лайков!');
        }
    }
    updateDislikes(dislike) {
        try {
            this._userDislike = dislike;
        }
        catch (err) {
            throw new Error('Ошибка при изменении дизлайков!');
        }
    }
    updateReviews(reviews) {
        try {
            this._reviews = [...this._reviews, ...reviews];
        }
        catch (err) {
            console.log(err);
            throw new Error('Ошибка при обновлении Рецензий!');
        }
    }
    getCardData() {
        return {
            id: this._id,
            posterImage: this._posterImage,
            reviews: this._reviews,
            name: this._name,
            secondName: this._secondName,
            ratings: this._ratings,
            userLike: this._userLike,
            userDislike: this._userDislike,
            favourites: this._favourites,
            year: this._year,
            country: this._country,
            slogan: this._slogan,
            directors: this._directors,
            screenwriters: this._screenwriters,
            producers: this._producers,
            operators: this._operators,
            composers: this._composers,
            artists: this._artists,
            editors: this._editors,
            genres: this._genres,
            collecting: this._collecting,
            oremiereImWorld: this._premiereInWorld,
            premiereInRussia: this._premiereInRussia,
            age: this._age,
            duration: this.duration,
            production: this._production,
            specialEffects: this._specialEffects,
            dubbingStudios: this._dubbingStudios,
            persons: this._persons,
            trailers: this._trailers,
            awards: this._awards,
            posters: this._posters,
            shots: this._shots,
            sequelAndPrequels: this._sequelAndPrequels,
            quotes: this._quotes,
            seemFilms: this._seemFilms,
            description: this._description,
        };
    }
}
exports.CardEntity = CardEntity;
//# sourceMappingURL=card.entity.js.map