"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const user_entity_1 = require("../../domains/entities/user.entity");
class UserMapper {
    static mapToDomain(user) {
        const id = user._id.valueOf();
        const friends = user.friends.map((i) => i.valueOf());
        const likedFilms = user.likedFilms.map((i) => i.valueOf());
        const dislikedFilms = user.dislikedFilms.map((i) => i.valueOf());
        const films = user.films.map((i) => i.valueOf());
        const expectedFilms = user.expectedFilms.map((i) => i.valueOf());
        const favoriteFilms = user.favoriteFilms.map((i) => i.valueOf());
        const persons = user.persons.map((i) => i.valueOf());
        return new user_entity_1.UserEntity(id, user.email, user.password, user.name, user.secondName, user.vk, user.instagram, user.youtube, user.twitter, user.facebook, user.aboutMe, user.gender, user.birthday, user.country, user.city, user.favoriteGenres, films, friends, favoriteFilms, expectedFilms, persons, user.favoritePersons, user.reviews, user.comments, likedFilms, dislikedFilms, user.avatarImage, user.wasOnline);
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user.mapper.js.map