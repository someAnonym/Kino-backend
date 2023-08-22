"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardMapper = void 0;
const card_entity_1 = require("../../domains/entities/card.entity");
class CardMapper {
    static mapToDomain(card) {
        const id = card._id.valueOf();
        const sequelAndPrequels = card.sequelAndPrequels.map((i) => i.valueOf());
        const seemFilms = card.seemFilms.map((i) => i.valueOf());
        const awards = card.awards.map((i) => i.valueOf());
        const reviews = card.reviews.map((i) => i.valueOf());
        const persons = card.persons.map((i) => i.valueOf());
        const quotes = card.quotes.map((i) => i.valueOf());
        const ratings = card.ratings.map((i) => i.valueOf());
        const directors = card.directors.map((i) => i.valueOf());
        return new card_entity_1.CardEntity(id, card.posterImage, card.backgroundImage, reviews, card.name, card.secondName, ratings, card.userLike, card.userDislike, card.favorites, card.year, card.country, card.slogan, directors, card.screenwriters, card.producers, card.operators, card.composers, card.artists, card.editors, card.genres, card.collecting, card.premiereInWorld, card.premiereInRussia, card.age, card.duration, card.production, card.specialEffects, card.dubbingStudios, persons, card.trailers, awards, card.posters, card.shots, sequelAndPrequels, quotes, seemFilms, card.description);
    }
}
exports.CardMapper = CardMapper;
//# sourceMappingURL=card.mapper.js.map