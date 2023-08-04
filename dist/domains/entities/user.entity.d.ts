export declare class UserEntity {
    private readonly _id;
    private _email;
    private _password;
    private _name;
    private _secondName;
    private _vk;
    private _instagram;
    private _youtube;
    private _twitter;
    private _facebook;
    private _aboutMe;
    private _gender;
    private _birthday;
    private _country;
    private _city;
    private _favoriteGenres;
    private readonly _films;
    private readonly _friends;
    private readonly _favoriteFilms;
    private readonly _expecredFilms;
    private readonly _persons;
    private readonly _favoritePersons;
    private _reviews;
    private _comments;
    private _likedFilms;
    private _dislikedFilms;
    private _avatarImage?;
    private _wasOnline?;
    constructor(_id: string, _email: string, _password: string, _name: string, _secondName: string, _vk: string, _instagram: string, _youtube: string, _twitter: string, _facebook: string, _aboutMe: string, _gender: string, _birthday: string, _country: string, _city: string, _favoriteGenres: string[], _films: string[], _friends: string[], _favoriteFilms: string[], _expecredFilms: string[], _persons: string[], _favoritePersons: string[], _reviews: string[], _comments: string[], _likedFilms: string[], _dislikedFilms: string[], _avatarImage?: string, _wasOnline?: Date);
    get id(): string;
    get email(): string;
    get password(): string;
    get name(): string;
    get secondName(): string;
    get vk(): string;
    get instagram(): string;
    get youtube(): string;
    get twitter(): string;
    get facebook(): string;
    get aboutMe(): string;
    get gender(): string;
    get birthday(): string;
    get country(): string;
    get city(): string;
    get favoriteGenres(): string[];
    get films(): string[];
    get friends(): string[];
    get favoriteFilms(): string[];
    get expectedFilms(): string[];
    get persons(): string[];
    get favoritePersons(): string[];
    get reviews(): string[];
    get comments(): string[];
    get likedFilms(): string[];
    get dislikedFilms(): string[];
    get avatarImage(): string;
    get wasOnline(): Date;
    getUserData(): {
        id: string;
        email: string;
        password: string;
        name: string;
        secondName: string;
        vk: string;
        instagram: string;
        facebook: string;
        youtube: string;
        twitter: string;
        aboutMe: string;
        gender: string;
        birthday: string;
        country: string;
        city: string;
        favoriteGenres: string[];
        favoriteFilms: string[];
        films: string[];
        friends: string[];
        expectedFilms: string[];
        persons: string[];
        favoritePersons: string[];
        reviews: string[];
        comments: string[];
        likedFilms: string[];
        dislikedfilms: string[];
        avatarImage: string;
        wasOnline: Date;
    };
    updateGender(gender: string): void | never;
    updateBirthday(birthday: string): void | never;
    updateCity(city: string): void | never;
    updateCountry(country: string): void | never;
    updateGenres(genres: string[]): void | never;
    updateAboutMe(about: string): void | never;
    updateName(name: string): void | never;
    updateSecondName(secondName: string): void | never;
    updateVk(vk: string): void | never;
    updateInstagram(instagram: string): void | never;
    updateTwitter(twitter: string): void | never;
    updateYoutube(youtube: string): void | never;
    updateFacebook(facebook: string): void | never;
    updatePassword(password: string): void | never;
    updateUserEmail(email: string): void | never;
    updateUserAvatar(avatar: string): void | never;
    private _validateUserEmail;
    private _validateUserPassword;
    private _validateUserAvatar;
}
