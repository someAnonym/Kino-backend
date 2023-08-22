"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const USER_CONFIG = {
    password: {
        minLength: 6,
        maxLength: 24,
    },
    email: {
        minLength: 8,
    },
    avatar: {
        dir: '/uploads/',
    },
};
class UserEntity {
    constructor(_id, _email, _password, _name, _secondName, _vk, _instagram, _youtube, _twitter, _facebook, _aboutMe, _gender, _birthday, _country, _city, _favoriteGenres, _films, _friends, _favoriteFilms, _expecredFilms, _persons, _favoritePersons, _reviews, _comments, _likedFilms, _dislikedFilms, _avatarImage, _wasOnline) {
        this._id = _id;
        this._email = _email;
        this._password = _password;
        this._name = _name;
        this._secondName = _secondName;
        this._vk = _vk;
        this._instagram = _instagram;
        this._youtube = _youtube;
        this._twitter = _twitter;
        this._facebook = _facebook;
        this._aboutMe = _aboutMe;
        this._gender = _gender;
        this._birthday = _birthday;
        this._country = _country;
        this._city = _city;
        this._favoriteGenres = _favoriteGenres;
        this._films = _films;
        this._friends = _friends;
        this._favoriteFilms = _favoriteFilms;
        this._expecredFilms = _expecredFilms;
        this._persons = _persons;
        this._favoritePersons = _favoritePersons;
        this._reviews = _reviews;
        this._comments = _comments;
        this._likedFilms = _likedFilms;
        this._dislikedFilms = _dislikedFilms;
        this._avatarImage = _avatarImage;
        this._wasOnline = _wasOnline;
    }
    get id() {
        return this._id;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
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
    get gender() {
        return this._gender;
    }
    get birthday() {
        return this._birthday;
    }
    get country() {
        return this._country;
    }
    get city() {
        return this._city;
    }
    get favoriteGenres() {
        return this._favoriteGenres;
    }
    get films() {
        return this._films;
    }
    get friends() {
        return this._friends;
    }
    get favoriteFilms() {
        return this._favoriteFilms;
    }
    get expectedFilms() {
        return this._expecredFilms;
    }
    get persons() {
        return this._persons;
    }
    get favoritePersons() {
        return this._favoritePersons;
    }
    get reviews() {
        return this._reviews;
    }
    get comments() {
        return this._comments;
    }
    get likedFilms() {
        return this._likedFilms;
    }
    get dislikedFilms() {
        return this._dislikedFilms;
    }
    get avatarImage() {
        return this?._avatarImage;
    }
    get wasOnline() {
        return this?._wasOnline;
    }
    getUserData() {
        return {
            id: this._id,
            email: this._email,
            password: this._password,
            name: this._name,
            secondName: this._secondName,
            vk: this._vk,
            instagram: this._instagram,
            facebook: this._facebook,
            youtube: this._youtube,
            twitter: this._twitter,
            aboutMe: this._aboutMe,
            gender: this._gender,
            birthday: this._birthday,
            country: this._country,
            city: this._city,
            favoriteGenres: this._favoriteGenres,
            favoriteFilms: this._favoriteFilms,
            films: this._films,
            friends: this._friends,
            expectedFilms: this._expecredFilms,
            persons: this._persons,
            favoritePersons: this._favoritePersons,
            reviews: this._reviews,
            comments: this._comments,
            likedFilms: this._likedFilms,
            dislikedfilms: this._dislikedFilms,
            avatarImage: this._avatarImage,
            wasOnline: this._wasOnline,
        };
    }
    updateFriends(friends) {
        try {
            this._friends = [...this._friends, ...friends];
        }
        catch (error) {
            throw new Error('Ошибка при обновлении количества друзей!');
        }
    }
    updateGender(gender) {
        try {
            this._gender = gender;
        }
        catch (error) {
            throw new Error('Слишком мало символов!');
        }
    }
    updateBirthday(birthday) {
        if (birthday.length >= 5) {
            this._birthday = birthday;
        }
        else {
            throw new Error('Слишком мало символов!');
        }
    }
    updateCity(city) {
        try {
            this._city = city;
        }
        catch (err) {
            throw new Error('Слишком мало символов!');
        }
    }
    updateCountry(country) {
        try {
            this._country = country;
        }
        catch (err) {
            throw new Error('Слишком мало символов!');
        }
    }
    updateGenres(genres) {
        try {
            this._favoriteGenres = genres;
        }
        catch (err) {
            throw new Error('Ошибка при обновлении жанров!');
        }
    }
    updateAboutMe(about) {
        if (about.length >= 5) {
            this._aboutMe = about;
        }
        else {
            throw new Error('Слишком мало символов!');
        }
    }
    updateName(name) {
        if (name.length >= 2 && !name.includes('!')) {
            this._name = name;
        }
        else {
            throw new Error('Слишком мало символов!');
        }
    }
    updateSecondName(secondName) {
        if (secondName.length >= 4 && !secondName.includes('!')) {
            this._secondName = secondName;
        }
        else {
            throw new Error('Слишком мало символов!');
        }
    }
    updateVk(vk) {
        if (vk.includes('vk.com')) {
            this._vk = vk;
        }
        else {
            throw new Error('Неверный тип ссылки');
        }
    }
    updateInstagram(instagram) {
        if (instagram.includes('instagram.com')) {
            this._instagram = instagram;
        }
        else {
            throw new Error('Неверный тип ссылки');
        }
    }
    updateTwitter(twitter) {
        if (twitter.includes('twitter.com')) {
            this._twitter = twitter;
        }
        else {
            throw new Error('Неверный тип ссылки');
        }
    }
    updateYoutube(youtube) {
        if (youtube.includes('youtube.com')) {
            this._youtube = youtube;
        }
        else {
            throw new Error('Неверный тип ссылки');
        }
    }
    updateFacebook(facebook) {
        if (facebook.includes('facebook.com')) {
            this._facebook = facebook;
        }
        else {
            throw new Error('Неверный тип ссылки');
        }
    }
    updatePassword(password) {
        if (this._validateUserPassword(password)) {
            this._password = password;
        }
        else {
            throw new Error('Новый пароль не валиден');
        }
    }
    updateUserEmail(email) {
        if (this._validateUserEmail(email)) {
            this._email = email;
        }
        else {
            throw new Error('Новый email не валиден');
        }
    }
    updateUserAvatar(avatar) {
        if (this._validateUserAvatar(avatar)) {
            this._avatarImage = avatar;
        }
        else {
            throw new Error('Новый аватар не валиден');
        }
    }
    _validateUserEmail(email) {
        const isEmailLengthValid = email.length >= USER_CONFIG.email.minLength;
        const isEmailTruthy = email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
        return isEmailTruthy && isEmailLengthValid;
    }
    _validateUserPassword(password) {
        const isPasswordAnother = password !== this._password;
        const isPasswordLengthValid = password.length >= USER_CONFIG.password.minLength &&
            password.length <= USER_CONFIG.password.maxLength;
        const isSpacesInPassword = [...password].includes(' ');
        return isPasswordAnother && isPasswordLengthValid && !isSpacesInPassword;
    }
    _validateUserAvatar(avatar) {
        const isAvatarInRightDir = avatar.includes(USER_CONFIG.avatar.dir);
        return isAvatarInRightDir;
    }
}
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map