"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonMapper = void 0;
const person_entity_1 = require("../../domains/entities/person.entity");
class PersonMapper {
    static mapToDomain(person) {
        const id = person._id.valueOf();
        const films = person.films.map((i) => i.valueOf());
        const bestFilms = person.films.map((i) => i.valueOf());
        const awards = person.awards.map((i) => i.valueOf());
        const comments = person.comments.map((i) => i.valueOf());
        return new person_entity_1.PersonEntity(id, person.name, person.avatarImage, person.englishName, person.linkToBiography, person.career, person.height, person.birthday, person.bornPlace, person.genres, person.totalCountOfFilmsAndYears, person.favorites, awards, bestFilms, person.lastNews, person.photos, films, comments);
    }
}
exports.PersonMapper = PersonMapper;
//# sourceMappingURL=person.mapper.js.map