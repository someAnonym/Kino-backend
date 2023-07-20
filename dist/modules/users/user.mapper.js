"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const user_entity_1 = require("../../domains/entities/user.entity");
class UserMapper {
    static mapToDomain(user) {
        const id = user._id.valueOf();
        const friends = user.friends.map((i) => i.valueOf());
        return new user_entity_1.UserEntity(id, user.email, user.password, user.name, user.secondName, user.vk, user.instagram, user.youtube, user.twitter, user.facebook, user.aboutMe, user.gender, user.birthday, user.country, user.city, user.favoriteGenres, user.films, friends, user.favoriteFilms, user.expectedFilms, user.persons, user.favoritePersons, user.reviews, user.comments, user.likedFilms, user.dislikedFilms, user.avatarImage, user.wasOnline);
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user.mapper.js.map