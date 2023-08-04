"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserCommand = void 0;
class UpdateUserCommand {
    constructor(_userId, _email, _name, _secondName, _vk, _instagram, _youtube, _twitter, _facebook, _aboutMe, _avatarImage, _gender, _birthday, _country, _city, _favoriteGenres) {
        this._userId = _userId;
        this._email = _email;
        this._name = _name;
        this._secondName = _secondName;
        this._vk = _vk;
        this._instagram = _instagram;
        this._youtube = _youtube;
        this._twitter = _twitter;
        this._facebook = _facebook;
        this._aboutMe = _aboutMe;
        this._avatarImage = _avatarImage;
        this._gender = _gender;
        this._birthday = _birthday;
        this._country = _country;
        this._city = _city;
        this._favoriteGenres = _favoriteGenres;
    }
    get userId() {
        return this._userId;
    }
    get email() {
        return this._email;
    }
    get favoriteGenres() {
        return this._favoriteGenres;
    }
    get avatarImage() {
        return this._avatarImage;
    }
    get name() {
        return this._name;
    }
    get secondName() {
        return this._secondName;
    }
    get vk() {
        return this._vk;
    }
    get instagram() {
        return this._instagram;
    }
    get youtube() {
        return this._youtube;
    }
    get twitter() {
        return this._twitter;
    }
    get facebook() {
        return this._facebook;
    }
    get aboutMe() {
        return this._aboutMe;
    }
    get city() {
        return this._city;
    }
    get country() {
        return this._country;
    }
    get gender() {
        return this._gender;
    }
    get birthday() {
        return this._birthday;
    }
}
exports.UpdateUserCommand = UpdateUserCommand;
//# sourceMappingURL=update-user.command.js.map