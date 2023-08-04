"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserService = void 0;
class UpdateUserService {
    constructor(_userRepository) {
        this._userRepository = _userRepository;
    }
    async updateUser(command) {
        const user = await this._userRepository.loadUser(command.userId);
        user.updateAboutMe(command.aboutMe);
        user.updateUserAvatar(command.avatarImage);
        user.updateFacebook(command.facebook);
        user.updateTwitter(command.twitter);
        user.updateInstagram(command.instagram);
        user.updateVk(command.vk);
        user.updateYoutube(command.youtube);
        user.updateUserEmail(command.email);
        user.updateName(command.name);
        user.updateSecondName(command.secondName);
        user.updateGender(command.gender);
        user.updateBirthday(command.birthday);
        user.updateCity(command.city);
        user.updateCountry(command.country);
        user.updateGenres(command.favoriteGenres);
        await this._userRepository.updateUser(user);
        return user;
    }
}
exports.UpdateUserService = UpdateUserService;
//# sourceMappingURL=update-user.service.js.map